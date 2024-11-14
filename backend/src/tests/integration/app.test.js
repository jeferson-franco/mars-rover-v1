const request = require('supertest');
const app = require('../../app');

describe('API Input Validation', () => {
  it('should return error 400 when the input format is invalid', async () => {
    const response = await request(app).post('/api/rover/move').send({
      // Sending invalid data
      plateau: '',
      rovers: null,
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input format' });
  });

  it('should return error 400 when the plateau coordinates are invalid', async () => {
    const response = await request(app)
      .post('/api/rover/move')
      .send({
        plateau: '-5 -5', // invalid coordinates
        rovers: [
          {
            position: '1 2 N',
            instructions: 'LMLMLMLMM',
          },
        ],
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid plateau coordinates' });
  });
});
