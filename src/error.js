/**
 * @file error event center
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
import { ajax } from "./ajax";
import Wrap from "./wrap";

// 服务端返回错误
export const getServerError = function() {};

// ajaxError
export const ajaxError = function(err, config) {
  // 处理err 上报
  if (err.type === "ajaxLoad" && err.detail.status > 300) {
    let data = new Wrap()._getErrorMessage(err);
    ajax.post(config.url, data, function() {},
    function(error) {
      console.log(error);
    });
  }
}

// js 内部运行错误
export const getError = function(err, config) {
  // 可以被取消的是js抛出的错误
  if (err.cancelable) {
    getJsError(err, config);
  } else {
    geetResourceError(err, config);
  }
}

// js 抛出的错误
const getJsError = function(err, config) {
  let data = new Wrap()._getErrorMessage(err);
  ajax.post(config.url, data,
  function() {},
  function(error) {
    console.log(error);
  });
}

// 资源加载错误
const geetResourceError = function (err, config) {
  let data = ajax.getWraper(err, Wrap, true);
    ajax.post(config.url, data,
    function() {},
    function(error) {
      console.log(error);
    });
}
