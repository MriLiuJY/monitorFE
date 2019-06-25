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
  console.log("ajaxError ------", err);
  // 处理err 上报
  let wrap = new Wrap();
  let data = wrap._geWrap();
  wrap._getIP(
    function(ip) {
      data.ip = ip;
    }
  );
  if (err.type === "ajaxLoad" && err.detail.status > 300) {
    data.responseURL = err.detail.responseURL;
    data.status = err.detail.status;
    data.statusText = err.detail.statusText;
    console.log(data);
    if (ajax.canAjax()) {
      ajax.post({type: "post"}, "/monitor", data,
      function() {},
      function(err) {
        console.log(err);
      });
    }
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
}

// 资源加载错误
const geetResourceError = function (err) {
  console.log(err);
}
