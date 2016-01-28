'use strict';

/**
 * @class Util
 * GitPie util methods
*/
class Util {
  constructor() {
  }

  isRoot() {
    let isRoot = require('is-root');

    return isRoot();
  }
}

module.exports = new Util();
