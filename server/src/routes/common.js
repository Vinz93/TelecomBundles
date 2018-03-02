import express from 'express';
import validate from 'express-validation';

import bundle from '../controllers/bundle';
import { catchErrors } from '../helpers/errors';
const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false,
});

router.route('/bundles')
  .get(catchErrors(bundle.getAll));

export default router;
