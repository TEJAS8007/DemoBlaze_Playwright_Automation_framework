// Utilities/logger.js
const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');

function getLogger(logFileName = 'logs/combined.log') {
  const dir = path.dirname(logFileName);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
      })
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: logFileName })
    ]
  });
}

module.exports = getLogger;
