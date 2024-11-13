import { reactive } from 'vue';

export const store = reactive({
  plateau: {
    x: 5,
    y: 5,
  },
  rovers: [],

  setPlateauSize(x, y) {
    console.log(`Setting plateau size to ${x}${y}`);
    this.plateau.x = parseInt(x);
    this.plateau.y = parseInt(y);
    this.reset();
  },

  addRover(position) {
    console.log(`Adding rover: ${position}`);
    this.rovers.push({
      position,
      commands: '',
      executed: false,
    });
  },

  setCommands(roverIndex, commands) {
    console.log(`Setting commands: ${roverIndex} ${commands}`);
    if (this.rovers[roverIndex]) {
      this.rovers[roverIndex].commands = commands;
    }
  },

  executeRoverMission(roverIndex) {
    console.log(`Executing mission for rover ${roverIndex}`);
    if (!this.rovers[roverIndex] || this.rovers[roverIndex].executed) {
      console.log('Rover already executed or not found');
      return;
    }

    const rover = this.rovers[roverIndex];
    const commands = rover.commands.split('');
    let [x, y, direction] = rover.position.split(' ');
    x = parseInt(x);
    y = parseInt(y);

    console.log(`Starting position: ${x} ${y} ${direction}`);
    console.log(`Commands to execute: ${commands.join('')}`);

    for (const command of commands) {
      console.log(`Executing command: ${command}`);

      if (command === 'M') {
        const newPosition = this.moveForward(x, y, direction);
        x = newPosition.x;
        y = newPosition.y;
        console.log(`Moved to: ${x} ${y}`);
      } else if (command === 'L' || command === 'R') {
        direction =
          command === 'L'
            ? this.rotateLeft(direction)
            : this.rotateRight(direction);
        console.log(`Rotated to: ${direction}`);
      }
    }

    const newPosition = `${x} ${y} ${direction}`;
    console.log(`Final position: ${newPosition}`);
    this.rovers[roverIndex].position = newPosition;
    this.rovers[roverIndex].executed = true;
  },

  moveForward(x, y, direction) {
    let newX = x;
    let newY = y;

    switch (direction) {
      case 'N':
        newY = Math.min(y + 1, this.plateau.y);
        break;
      case 'E':
        newX = Math.min(x + 1, this.plateau.x);
        break;
      case 'S':
        newY = Math.max(y - 1, 0);
        break;
      case 'W':
        newX = Math.max(x - 1, 0);
        break;
    }

    return { x: newX, y: newY };
  },

  executeAllMissions() {
    console.log('Executing all missions');
    this.rovers.forEach((_, index) => {
      this.executeRoverMission(index);
    });
  },

  rotateLeft(direction) {
    const directions = ['N', 'E', 'S', 'W'];
    const currentIndex = directions.indexOf(direction);
    return directions[(currentIndex - 1 + 4) % 4];
  },

  rotateRight(direction) {
    const directions = ['N', 'E', 'S', 'W'];
    const currentIndex = directions.indexOf(direction);
    return directions[(currentIndex + 1) % 4];
  },

  reset() {
    console.log('Resetting store');
    this.rovers = [];
  },
});
