const _ = require('lodash');
const config = require('./config.json');
const defaultConfig = config.dev;
const environment = process.env.NODE_ENV || 'dev';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

module.exports = finalConfig.database;