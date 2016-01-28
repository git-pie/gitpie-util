'use strict';

let chalk = require('chalk');

/**
 * @class GPLogger
 * GitPie logger
*/
class GPLogger {
  constructor() {
  }

  INIT() {
    return `[${new Date().toLocaleString()}]`;
  }

  info(msg) {
    var me = this;

    console.info( chalk.blue(`${me.INIT()} [INFO]`), `${msg}` );
  }

  warn(msg) {
    var me = this;

    console.warn( chalk.yellow(`${me.INIT()} [WARN]`), `${msg}` );
  }

  error(msg) {
    var me = this;

    console.error( chalk.red(`${me.INIT()} [ERROR]`), `${msg}` );
  }

  success(msg) {
    var me = this;

    console.log( chalk.green(`${me.INIT()} [SUCCESS]`), `${msg}` );
  }
}

module.exports = new GPLogger();
