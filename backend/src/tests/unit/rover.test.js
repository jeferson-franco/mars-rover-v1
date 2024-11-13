import { expect } from 'chai';
import { MarsRover } from '../../src/models/MarsRover';

describe('Mars Rover', () => {
  let rover;

  beforeEach(() => {
    rover = new MarsRover(0, 0, 'N');
  });

  describe('Movement Tests', () => {
    it('Should move forward correctly when facing North', () => {
      rover.move('M');
      expect(rover.y).to.equal(1);
      expect(rover.x).to.equal(0);
    });

    it('should move backward correctly when facing North', () => {
      rover.move('B');
      expect(rover.y).to.equal(-1);
      expect(rover.x).to.equal(0);
    });
  });

  describe('Rotation Tests', () => {
    it('should rotate left correctly', () => {
      rover.move('L');
      expect(rover.direction).to.equal('W');
    });

    it('should rotate right correctly', () => {
      rover.move('R');
      expect(rover.direction).to.equal('E');
    });
  });

  describe('Command Sequence Tests', () => {
    it('should execute multiple commands correctly', () => {
      rover.executeCommands('MMLR');
      expect(rover.x).to.equal(-1);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('N');
    });
  });

  describe('Boundary Tests', () => {
    it('should handle grid boundaries correctly', () => {
      rover = new MarsRover(9, 9, 'N');
      rover.move('M');
      expect(rover.y).to.equal(9); // should not exceed boundary
    });
  });

  describe('Invalid Input Tests', () => {
    it('should handle invalid commands gracefully', () => {
      expect(() => rover.move('X')).to.throw('Invalid command');
    });
  });
});
