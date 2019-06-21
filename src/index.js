/**
 * @file main js at project
 * @author JYkid
 * @version 0.0.1-beta
 */

import Wrap from "./wrap";
import Config from "./config";

/* eslint-disable */
function initMonitor(userConfig) {
  let config = new Config(userConfig);

  console.log(config);

  // 获取 wrap
  let wrap = new Wrap();
  let data = {};
  data.wrap = wrap._geWrap();
  wrap._getIP(
    function(ip){
      data.ip = ip;
    }
  );

  console.log(data);
}

window.initMonitor = initMonitor;

module.exports = initMonitor;
