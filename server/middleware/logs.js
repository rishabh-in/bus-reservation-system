import fs from 'fs';
import path from 'path';
const logger = (req, res, next) => {
  try {
    const log = `${Date.now()}: ${req.method} ${req.path} \n`;
    console.log(log)
    const loggerFilename = 'logs.txt';
    const loggerFoldername = 'logger';
    const loggerPath = path.join(loggerFoldername, loggerFilename);
    fs.appendFile(loggerPath, log, (err) => {
      if(err) throw new Error(err)
      next();
    })
  } catch (error) {
    console.log(error);
  }
}

export default logger;