import winston from 'winston';
import path from 'path';
// import config from 'config';
// import Logentries from 'winston-logentries';

const configs = {
    levels: {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        verbose: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        debug: 'blue',
        warn: 'yellow',
        data: 'grey',
        info: 'green',
        verbose: 'cyan',
        silly: 'magenta'
    }
};

winston.emitErrs = true;

export const logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, '../../logs/error.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false,
            timestamp: true
        }),
        new winston.transports.Console({
            handleExceptions: true,
            json: false,
            colorize: true,
            timestamp: true,
            prettyPrint: true
        })
    // new winston.transports.Logentries({
    //   token: config.get('LOGENTRIES.TOKEN'),
    //   handleExceptions: true,
    //   json: false,
    //   colorize: true,
    //   timestamp :true,
    //   prettyPrint: true,
    // })
    ],
    levels: configs.levels,
    colors: configs.colors,
    exitOnError: false
});
