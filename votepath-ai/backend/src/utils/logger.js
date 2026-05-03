const { Logging } = require('@google-cloud/logging');

const logging = new Logging();
const log = logging.log('votepath-ai-logs');

const logger = {
  info: (message, metadata = {}) => {
    const entry = log.entry({ severity: 'INFO' }, { message, ...metadata });
    log.write(entry).catch(console.error);
    console.log(`INFO: ${message}`, metadata);
  },
  error: (message, metadata = {}) => {
    const entry = log.entry({ severity: 'ERROR' }, { message, ...metadata });
    log.write(entry).catch(console.error);
    console.error(`ERROR: ${message}`, metadata);
  }
};

module.exports = logger;
