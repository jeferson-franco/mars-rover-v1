const request = require('supertest');
const app = require('../../../src/app');

describe('Rover API Integration Tests', () => {
  describe('POST /api/rover/command', () => {
    it('should process valid commands successfully', async () => {
      const response = await request(app)
        .post('/api/rover/command')
        .send({
          commands: 'MMLRMM',
          position: { x: 0, y: 0, direction: 'N' },
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        position: {
          x: -1,
          y: 3,
          direction: 'N',
        },
        status: 'success',
      });
    });

    it('should handle grid boundaries', async () => {
      const response = await request(app)
        .post('/api/rover/command')
        .send({
          commands: 'MMMMMMMMMM', // try to move beyond grid
          position: { x: 0, y: 0, direction: 'N' },
        });

      expect(response.status).toBe(200);
      expect(response.body.position.y).toBeLessThanOrEqual(9);
    });
  });
});
