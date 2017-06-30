const logger = require('winston');
const Bot = require('slackbots');
class SpeechBot {
  constructor (config) {
    logger.info('[Spee.ch Bot] Initializing Bot...');
    this.config = config;
    this.init(config);
  }

  init (config) {
    // All bot stuff here
    this.bot = new Bot({
      token: config.get('BOT_TOKEN'),
      name : config.get('BOT_NAME'),
    });
  }
}

module.exports = SpeechBot;
