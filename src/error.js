/**
 * @file error event center
 * @author JYkidrecord
 * @version 0.0.1-beta
 */

/* eslint-disable */
import { ajax } from "./ajax";
import Wrap from "./wrap";

const wrap = new Wrap();
const getErrorData = function(err, initMonitor) {
  let data = wrap._getErrorMessage(err);
  data.record = [];

  let config = initMonitor._config;
  if (config.record) {
    data.record = initMonitor._getRrwebEvent();
  }
  return data;
};

// 服务端返回错误
export const getServerError = function() {};

// ajaxError
export const ajaxError = function(err, initMonitor) {
  // 处理err 上报
  if (err.type === "ajaxLoad" && err.detail.status >= 400) {
    let data = getErrorData(err, initMonitor);
    let config = initMonitor._config;
    ajax.post(config.protocol + config.url, data, function() {
      initMonitor._clearEvent();
    },
    function(error) {
      console.log(error);
    });
  }
}

// js 抛出的错误
export const getJsError = function(err, initMonitor) {
  let data = getErrorData(err, initMonitor);
  let config = initMonitor._config;
  ajax.post(config.protocol + config.url, data,
  function() {
    initMonitor._clearEvent();
  },
  function(error) {
    console.log(error);
  });
}

// 资源加载错误
export const geetResourceError = function (err, initMonitor) {
  let data = getErrorData(err, initMonitor);
  let config = initMonitor._config;
  ajax.post(config.protocol + config.url, data,
  function() {
    initMonitor._clearEvent();
  },
  function(error) {
    console.log(error);
  });
}
