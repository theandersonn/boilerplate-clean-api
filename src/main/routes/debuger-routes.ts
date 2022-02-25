import { Router } from 'express';

export default (router: Router): void => {
  router.get('/debuger', (req, res) => {
    res.json({ ok: 'ok' });
  });
};
