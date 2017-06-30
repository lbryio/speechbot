const logger = require('winston');
const fs = require('fs');
const SpeechBot = require('./speechBot');

const config = require('enviro-conf');

/* ---LOGGING--- */
const now = new Date();
const t = now.toISOString().replace(/[:.]/gi, '-');
const fname = `./log/${t}.log`;
try {
  fs.mkdirSync('./log');
} catch (e) {
  logger.log('err', e);
}

logger.level = 'debug';

logger.remove(
  logger.transports.Console).add(logger.transports.Console, {
  colorize                       : true,
  handleExceptions               : true,
  humanReadableUnhandledException: true,
}).add(logger.transports.File, {
  level           : 'debug',
  filename        : fname,
  handleExceptions: true,
}).handleExceptions(new logger.transports.File({
  filename: './crash.log',
}));

const speechBot = new SpeechBot(config); // eslint-disable-line no-unused-vars
