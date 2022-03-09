import request from 'supertest';

import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper';
import app from '../config/app';

describe('Debuger Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const debugerCollection = await MongoHelper.getCollection('debuger');
    await debugerCollection.deleteMany({});
  });

  test('Should return data on success', async () => {
    await request(app).get('/api/debuger').expect(200);
  });
});
