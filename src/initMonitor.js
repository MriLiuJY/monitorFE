/**
 * @file init func
 * @author JYkid
 * @version 0.0.1-beta
 */

import Wrap from "./wrap";
import Config from "./config";
import { GetError } from "./error";

/* eslint-disable */
function InitMonitor(userConfig) {
  let self = this;
  let config = new Config(userConfig);
  self._config = config;

  // 获取 wrap
  let wrap = new Wrap();
  let data = {};
  data.wrap = wrap._geWrap();
  wrap._getIP(
    function(ip) {
      data.ip = ip;
    }
  );
  self._init()
}

InitMonitor.prototype = {
  _init: function() {
    // 监听全局下的error事件
    window.addEventListener("error", function(err) {
      new GetError(err);
    }, true)
  },
  _getError: function() {},
  _send: function () {},
}

module.exports = InitMonitor;