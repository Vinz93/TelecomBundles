import * as development from './development';

const config = {
  development,
}[process.env.NODE_ENV || 'development'];

export default config;
