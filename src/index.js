/**
 * @file main js at project
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
import InitMonitor from "./initMonitor";

function monitor(userConfig) {
  const init = new InitMonitor(userConfig);
  
  return init;
}

monitor.prototype = {
  _destory: function() {},
}

module.exports = monitor;
