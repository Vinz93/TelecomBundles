import Promise from 'bluebird';

import app from './config/express';
import config from './config/env';

import 'babel-core/register';
import 'babel-polyfill';

const { port, path, host } = config.appConfig;

function listen() {
  app.listen(port);
  console.log(`💻  API started on port ${port}`);
  console.log(`📔  Swagger on ${host}:${port}${path}docs`);
}

listen();

export default app;
