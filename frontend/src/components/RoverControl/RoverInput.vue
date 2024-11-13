<template>
  <div class="control-panel">
    <!-- Add Plateau Size Input -->
    <div class="input-group">
      <label>Plateau Size (width height):</label>
      <input
        v-model="plateauSize"
        placeholder="5 5"
        @keyup.enter="setPlateauSize"
      />
      <button @click="setPlateauSize" :disabled="!plateauSize">
        Set Plateau Size
      </button>
    </div>

    <div class="input-group">
      <label>Initial Position (x y direction):</label>
      <input
        v-model="initialPosition"
        placeholder="0 0 N"
        @keyup.enter="addRover"
      />
    </div>

    <div class="input-group">
      <label>Commands (L, R, M):</label>
      <input
        v-model="commands"
        placeholder="LMLMLMLMM"
        @keyup.enter="addRover"
      />
    </div>

    <div class="button-group">
      <button @click="addRover" :disabled="!initialPosition || !commands">
        Add Rover
      </button>
      <button @click="executeMission" :disabled="!store.rovers.length">
        Execute Mission
      </button>
      <button @click="reset" :disabled="!store.rovers.length">Reset</button>
    </div>

    <div class="rovers-list">
      <div
        v-for="(rover, index) in store.rovers"
        :key="index"
        class="rover-item"
      >
        <span>Rover {{ index + 1 }}:</span>
        <div>Initial Position: {{ rover.position }}</div>
        <div>Commands: {{ rover.commands }}</div>
        <div v-if="rover.executed" class="executed">Executed Mission ✓</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { store } from '../../store/roverStore';

export default defineComponent({
  name: 'RoverInput',

  setup() {
    const initialPosition = ref('');
    const commands = ref('');
    const plateauSize = ref('');

    const validateInput = (position) => {
      const parts = position.split(' ');
      if (parts.length !== 3) return false;

      const [x, y, direction] = parts;
      const validDirections = ['N', 'S', 'E', 'W'];

      return !isNaN(x) && !isNaN(y) && validDirections.includes(direction);
    };

    const validateCommands = (cmds) => {
      return /^[LRM]+$/.test(cmds);
    };

    const validatePlateauSize = (size) => {
      const parts = size.split(' ');
      if (parts.length !== 2) return false;
      const [x, y] = parts;
      return !isNaN(x) && !isNaN(y) && x > 0 && y > 0;
    };

    const setPlateauSize = () => {
      if (!plateauSize.value) return;

      if (!validatePlateauSize(plateauSize.value)) {
        alert('Invalid plateau size. Use format: "width height" (e.g. "5 5")');
        return;
      }

      const [x, y] = plateauSize.value.split(' ').map(Number);
      store.setPlateauSize(x, y);
    };

    const addRover = () => {
      if (!initialPosition.value || !commands.value) return;

      if (!validateInput(initialPosition.value)) {
        alert('Invalid initial position. Use format: "x y D" (e.g. "0 0 N")');
        return;
      }

      if (!validateCommands(commands.value)) {
        alert('Invalid commands. Use only L, R, M');
        return;
      }

      store.addRover(initialPosition.value);
      const currentIndex = store.rovers.length - 1;
      store.setCommands(currentIndex, commands.value);

      // Clear inputs after adding rover
      initialPosition.value = '';
      commands.value = '';
    };

    const executeMission = () => {
      store.executeAllMissions();
    };

    const reset = () => {
      store.reset();
    };

    return {
      store,
      initialPosition,
      commands,
      plateauSize,
      addRover,
      executeMission,
      reset,
      setPlateauSize,
    };
  },
});
</script>

<style scoped>
.control-panel {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.input-group input:focus {
  border-color: #4caf50;
  outline: none;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.rovers-list {
  margin-top: 20px;
}

.rover-item {
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.rover-item span {
  font-weight: bold;
  color: #2c3e50;
}

.rover-item div {
  margin-top: 5px;
  color: #666;
}

.executed {
  color: #4caf50 !important;
  font-weight: bold;
}

@media (max-width: 600px) {
  .button-group {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
</style>
