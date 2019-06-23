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
  self._initListenJS();
  self._initListenAjax();
}

InitMonitor.prototype = {
  _initListenJS: function() {
    // 监听全局下的error事件
    window.addEventListener("error", function(err) {
      new GetError(err);
    }, true);
  },
  _initListenAjax: function () {
    console.log("_initListenAjax");
    function ajaxEventTrigger(event) {
      var ajaxEvent = new CustomEvent(event, { detail: this });
      window.dispatchEvent(ajaxEvent);
     }
      
     var oldXHR = window.XMLHttpRequest;
     
     function newXHR() {
      var realXHR = new oldXHR();
      // console.log(111);
     
      realXHR.addEventListener('abort', function ($event) {
        console.log($event);
        ajaxEventTrigger.call(this, 'ajaxAbort'); },
      false);
     
      realXHR.addEventListener('error', function ($event) {
        console.log($event);
        ajaxEventTrigger.call(this, 'ajaxError');
      }, false);
     
      realXHR.addEventListener('load', function ($event) {
        console.log($event);
        ajaxEventTrigger.call(this, 'ajaxLoad');
      }, false);
     
      realXHR.addEventListener('loadstart', function () {
        // console.log($event);
        ajaxEventTrigger.call(this, 'ajaxLoadStart');
      }, false);
     
      realXHR.addEventListener('progress', function () {
        // console.log($event);
        ajaxEventTrigger.call(this, 'ajaxProgress');
      }, false);
     
      realXHR.addEventListener('timeout', function () {
        // console.log($event);
        ajaxEventTrigger.call(this, 'ajaxTimeout');
      }, false);
     
      realXHR.addEventListener('loadend', function () {
        // console.log($event);
        ajaxEventTrigger.call(this, 'ajaxLoadEnd');
      }, false);
     
      realXHR.addEventListener('readystatechange', function() {
        // console.log($event);
        ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
      }, false);
     
      return realXHR;
     }
     
     window.XMLHttpRequest = newXHR;
  },
  _send: function () {},
}

module.exports = InitMonitor;