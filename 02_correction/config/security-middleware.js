const request = require('supertest');
const app = require('../app');

describe('Security tests – SecureBank', () => {

  test('SQL Injection is blocked on /login', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: "admin' OR '1'='1", password: 'test' });

    expect(res.statusCode).toBe(401);
  });

  test('Invalid JWT token is rejected', async () => {
    const res = await request(app)
      .post('/transfer')
      .set('Authorization', 'Bearer invalid.token')
      .send({ amount: 100, toAccount: 'FR000' });

    expect(res.statusCode).toBe(401);
  });

  test('IDOR attempt is blocked', async () => {
    const res = await request(app)
      .post('/transfer')
      .set('Authorization', 'Bearer VALID_TOKEN')
      .send({ amount: 5000, toAccount: 'ACCOUNT_NOT_OWNED' });

    expect(res.statusCode).toBe(403);
  });

});
