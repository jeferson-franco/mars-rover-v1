const request = require('supertest');
const app = require('../../src/app');

describe('Rover API Integration Tests', () => {
  describe('POST /api/rover/move', () => {
    it('should process valid commands successfully', async () => {
      const response = await request(app)
        .post('/api/rover/move')
        .send({
          plateau: '5 5',
          rovers: [
            {
              position: '0 0 N',
              instructions: 'MMLRMM',
            },
          ],
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        results: [
          {
            initial: '0 0 N',
            instructions: 'MMLRMM',
            final: '0 4 N',
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
              position: '0 0 N',
              instructions: 'MMMMMMMMMM', // try to move beyond grid
            },
          ],
        });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        results: [
          {
            initial: '0 0 N',
            instructions: 'MMMMMMMMMM',
            error: 'Movement would place rover outside plateau',
          },
        ],
      });
    });
  });
});
