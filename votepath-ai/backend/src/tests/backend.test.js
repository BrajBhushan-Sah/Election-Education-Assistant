const request = require('supertest');
const app = require('../app');

describe('Health Check', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });
});

describe('API Routes (Unauthenticated)', () => {
  it('POST /api/chat should validate input', async () => {
    const res = await request(app).post('/api/chat').send({});
    expect(res.statusCode).toEqual(400); // Validation error
  });

  it('POST /api/translate should validate input', async () => {
    const res = await request(app).post('/api/translate').send({});
    expect(res.statusCode).toEqual(400); // Validation error
  });
});
