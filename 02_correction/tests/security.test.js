const request = require('supertest');
const app = require('../app'); // adapter le chemin si besoin

describe('Security tests – SecureBank', () => {

  /**
   * Test 1 : Vérifier que la SQL Injection est bloquée
   */
  test('SQL Injection is blocked on /login', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        username: "admin' OR '1'='1",
        password: 'test'
      });

    expect(response.statusCode).toBe(401);
  });

  /**
   * Test 2 : Vérifier qu’un token JWT invalide est refusé
   */
  test('Invalid JWT token is rejected on /transfer', async () => {
    const response = await request(app)
      .post('/transfer')
      .set('Authorization', 'Bearer fake.invalid.token')
      .send({
        amount: 100,
        toAccount: 'FR0000000000'
      });

    expect(response.statusCode).toBe(401);
  });

  /**
   * Test 3 : Vérifier qu’un utilisateur ne peut pas effectuer
   * un virement depuis un compte qui ne lui appartient pas (IDOR)
   */
  test('IDOR attempt is blocked', async () => {
    const response = await request(app)
      .post('/transfer')
      .set('Authorization', 'Bearer VALID_USER_TOKEN')
      .send({
        amount: 5000,
        toAccount: 'ACCOUNT_NOT_OWNED'
      });

    expect(response.statusCode).toBe(403);
  });

});
