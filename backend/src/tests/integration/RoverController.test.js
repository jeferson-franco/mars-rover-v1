const request = require('supertest');
const app = require('../../app');

describe('Rover API Integration Tests', () => {
  describe('POST /api/rover/move', () => {
    it('should process valid commands successfully', async () => {
      const response = await request(app)
        .post('/api/rover/move')
        .send({
          plateau: '5 5',
          rovers: [
            {
              position: '1 2 N',
              instructions: 'LMLMLMLMM',
            },
            {
              position: '3 3 E',
              instructions: 'MMRMMRMRRM',
            },
          ],
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        results: [
          {
            initial: '1 2 N',
            instructions: 'LMLMLMLMM',
            final: '1 3 N',
          },
          {
            initial: '3 3 E',
            instructions: 'MMRMMRMRRM',
            final: '5 1 E',
          },
        ],
      });
    });

    it('should handle grid boundaries', async () => {
      const response = await request(app)
        .post('/api/rover/move')
        .send({
          plateau: '5 5',
          rovers: [
            {
              position: '1 2 N',
              instructions: 'MMMMMMMMMM', // try to move beyond grid
            },
          ],
        });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        results: [
          {
            initial: '1 2 N',
            instructions: 'MMMMMMMMMM',
            error: 'Movement would place rover outside plateau',
          },
        ],
      });
    });
  });
});
