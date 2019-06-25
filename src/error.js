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

// 
export const ajaxError = function(err) {
  // 处理err 上报
  if (err.type === "ajaxLoad" && err.detail.status > 300) {
    let data = ajax.getWraper(err, Wrap)
    ajax.post("/monitor", data,
    function() {},
    function(error) {
      console.log(error);
    });
  }
}

// js 内部运行错误
export const getError = function(err) {
  // 可以被取消的是js抛出的错误
  if (err.cancelable) {
    getJsError(err);
  } else {
    geetResourceError(err);
  }
}

// js 抛出的错误
const getJsError = function(err) {
  console.log(err);
  // 处理err 上报
  let data = ajax.getWraper(err, Wrap)
    ajax.post("/monitor", data,
    function() {},
    function(error) {
      console.log(error);
    });
}

// 资源加载错误
const geetResourceError = function (err) {
  console.log(err);
  console.log("geetResourceError");
}
