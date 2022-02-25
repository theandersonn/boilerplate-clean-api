import request from 'supertest';

import app from '../config/app';

describe('Debuger Routes', () => {
  test('Should return data on success', async () => {
    await request(app).get('/api/debuger').expect(200);
  });
});
