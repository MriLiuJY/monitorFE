/**
 * @file main js at project
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
import InitMonitor from "./initMonitor";
import Monitor from "./monitor";

function Index(userConfig, callback) {
  const init = new InitMonitor(userConfig);

  callback(new Monitor(init));
  // 初始化
  return init;
}

module.exports = Index;
