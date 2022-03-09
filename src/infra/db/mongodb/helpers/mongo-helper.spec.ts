import { MongoHelper } from './mongo-helper';

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('Should reconnect if mongodb is down', async () => {
    let debugerCollection = await MongoHelper.getCollection('debuger');
    expect(debugerCollection).toBeTruthy();

    await MongoHelper.disconnect();
    debugerCollection = await MongoHelper.getCollection('debuger');
    expect(debugerCollection).toBeTruthy();
  });
});
