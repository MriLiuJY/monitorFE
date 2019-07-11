/**
 * @file main js at project
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
import InitMonitor from "./initMonitor";
import Monitor from "./monitor";

function Index(userConfig, callback) {
  callback(new Monitor());
  // 初始化
  return new InitMonitor(userConfig);
}

module.exports = Index;
