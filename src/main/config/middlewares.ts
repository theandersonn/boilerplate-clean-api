import { Express } from 'express';

import { bodyParser } from '../middlewares/body-paerser';

export default (app: Express): void => {
  app.use(bodyParser);
};
