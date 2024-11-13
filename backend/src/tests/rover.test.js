const request = require('supertest');
const app = require('../server');

describe('Rover API', () => {
  test('should process single rover instructions correctly', async () => {
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
      });

    expect(response.status).toBe(200);
    expect(response.body.results[0].final).toBe('1 3 N');
  });

  test('should process multiple rovers', async () => {
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
            instructions: 'MRRMMRMRRM',
          },
        ],
      });

    expect(response.status).toBe(200);
    expect(response.body.results[0].final).toBe('1 3 N');
    expect(response.body.results[1].final).toBe('2 3 S');
  });

  test('should handle invalid plateau coordinates', async () => {
    const response = await request(app)
      .post('/api/rover/move')
      .send({
        plateau: '-1 5',
        rovers: [
          {
            position: '1 2 N',
            instructions: 'LMLMLMLMM',
          },
        ],
      });

    expect(response.status).toBe(400);
  });
});
