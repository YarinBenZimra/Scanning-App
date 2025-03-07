const winston = require("winston");

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] ${message}`;
});

const logLevel = process.env.NODE_ENV === "production" ? "info" : "debug";
const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp({ format: "DD/MM/YYYY HH:mm:ss" }),
    logFormat,
    winston.format.colorize()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/logs.log",
      level: logLevel,
    }),
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
  ],
});

module.exports = logger;
