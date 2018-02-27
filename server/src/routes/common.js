import express from 'express';
import validate from 'express-validation';

import user from '../controllers/user';
import { catchErrors } from '../helpers/errors';
const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false,
});

router.route('/users')
  .get(catchErrors(user.readAll));

export default router;
