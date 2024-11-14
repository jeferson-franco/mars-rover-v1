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
              position: '1 2 N',
              instructions: 'LMLMLMLMM',
            },
          ],
          status: 'success',
        });

      expect(response.status).toBe(200);
      expect(response.body.results[0].final).toBe('1 3 N');
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
    });
  });
});
