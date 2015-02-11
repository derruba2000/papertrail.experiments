  var winston = require('winston');
 
  // 
  // Requiring `winston-papertrail` will expose 
  // `winston.transports.Papertrail` 
  // 
  require('winston-papertrail').Papertrail;
 
  var logger = new winston.Logger({
    transports: [
        new winston.transports.Papertrail({
            host: 'logs2.papertrailapp.com',
            port: 13907
        })
    ]
  });
 
  logger.info('this is my simply message');