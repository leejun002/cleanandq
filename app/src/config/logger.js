const { createLogger, transports, format } = require('winston');
const { combine, label, colorize, timestamp, printf } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = combine(
    label({
        label: 'resurrection',
    }),
    colorize(),
    timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }),
    printFormat
);

const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'info',
            format: printLogFormat,
        }),
    ],
});

module.exports = logger;