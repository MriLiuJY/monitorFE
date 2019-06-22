/**
 * @file main js at project
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
import InitMonitor from "./initMonitor";

function monitor(userConfig) {
  const init = new InitMonitor(userConfig);

  // if (callbak) {
    // callbak()
  // }

  // test code 
  throw new Error("index test throw error");
  return init;
}

monitor.prototype = {
  _destory: function() {},
}

module.exports = monitor;
