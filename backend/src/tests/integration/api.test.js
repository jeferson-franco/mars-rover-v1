import request from 'supertest';
import app from '../../src/app';

describe('Rover API Integration Tests', () => {
  describe('POST /api/rover/move', () => {
    it('should process movement commands successfully', async () => {
      const response = await request(app)
        .post('/api/rover/move')
        .send({
          commands: 'MMLR',
          initialPosition: { x: 0, y: 0, direction: 'N' },
        });

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('position');
      expect(response.body.position).to.deep.equal({
        x: -1,
        y: 2,
        direction: 'N',
      });
    });

    it('should handle invalid input properly', async () => {
      const response = await request(app)
        .post('/api/rover/move')
        .send({
          commands: 'INVALID',
          initialPosition: { x: 0, y: 0, direction: 'N' },
        });

      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('error');
    });
  });
});
