var winston = require('winston'),
    Papertrail = require('winston-papertrail').Papertrail,
    every = require('schedule').every;
 
var logger,
    consoleLogger = new winston.transports.Console({
        level: 'debug',
        timestamp: function() {
            return new Date().toString();
        },
        colorize: true
    }),
    ptTransport = new Papertrail({
        host: 'logs2.papertrailapp.com',
        port: 13907,
        colorize: true,
        hostname: 'HostJR',
        level: 'debug',
        logFormat: function(level, message) {
            return '[' + level + '] ' + message;
        }
    });
 
ptTransport.on('error', function(err) {
    logger && logger.error(err);
});
 
ptTransport.on('connect', function(message) {
    logger && logger.info(message);
});
 
var logger = new winston.Logger({
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    },
    transports: [
        ptTransport//,
        //consoleLogger
    ]
});


every('5s').do(function() {
    var now = new Date(); 
    var datetmp = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDay(); 
    datetmp += ' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds(); 
    logger.info('this is my message @' + datetmp);
});

logger.warn('this is a warning  message' );
