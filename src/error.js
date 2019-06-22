/**
 * @file error event center
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */

// 服务端返回错误
function GetServerError() {}

// js 内部运行错误
function GetError(err) {

  // 可以被取消的是js抛出的错误
  if (err.cancelable) {
    new GetJsError(err);
  } else {
    new GetResourceError(err);
  }
}

// js 抛出的错误
function GetJsError(err) {
  console.log(err);
  // 处理err 上报
}

// 资源加载错误
function GetResourceError(err) {
  console.log(err);
  // 处理err 上报
}

module.exports = {
  GetError,
  GetServerError,
};
