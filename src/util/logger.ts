import config from "../config";
import winston from "winston";   

// const logsDir = config.logDir; // directory for log files, can be set in .env file or defaults to "./logs"
// const isDev = config.isDev; // set to false in production if the user is not developer

const {logDir,isDev} = config; // destructuring the config object to get logDir and isDev values

const logFileFormate = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.splat(),
    winston.format.errors({stack: true}),
)

const logConsoleFormate = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({format:"HH:mm:ss"}),
    winston.format.errors({stack: true}),
    winston.format.splat(),
    winston.format.printf(({level, message, timestamp, stack}) => {
        return `[${timestamp}] ${level}: ${message} ${stack || ""}`;
    }),
)
// log levels are error, warn, info, http, verbose, debug, silly
const logger= winston.createLogger({
    level:"info",
    transports:[
        // kel m a3ml log hotili yeh b file esmo error.log (loggs t3ol error bs)
        new winston.transports.File({filename:"error.log", dirname:logDir , level:"error", format: logFileFormate}),
        // hon kelon ma3 b3d ==> yeh b file esmo combined.log (loggs t3ol kol el levels)
        new winston.transports.File({filename:"all.log", dirname:logDir,format: logFileFormate})
    ],
    exceptionHandlers:[
        new winston.transports.File({filename:"exceptions.log" , dirname:logDir})
    ]
});

if(isDev){
    logger.add(new winston.transports.Console({format:logConsoleFormate})),  //kel m a3ml log frgeni yeh 3al console
    logger.level = "debug"; // 3shan y3ml log lel debug level w kel el levels elly fo2ha
}
export default logger;