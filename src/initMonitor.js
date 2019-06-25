/**
 * @file init func
 * @author JYkid
 * @version 0.0.1-beta
 */

import Config from "./config";
import { getError, ajaxError } from "./error";

/* eslint-disable */
function InitMonitor(userConfig) {
  let self = this;
  let config = new Config(userConfig);
  self._config = config;
  
  self._initListenJS();
  self._initListenAjax();
}

InitMonitor.prototype = {
  _initListenJS: function() {
    // 监听全局下的error事件
    window.addEventListener("error", function(err) {
      getError(err);
    }, true);
  },
  _initListenAjax: function () {
    let self = this;
    function ajaxEventTrigger(event) {
      var ajaxEvent = new CustomEvent(event, { detail: this });
      window.dispatchEvent(ajaxEvent);
     }
      
     var oldXHR = window.XMLHttpRequest;
     
     function newXHR() {
      var realXHR = new oldXHR();
     
      realXHR.addEventListener('load', function ($event) {
        ajaxEventTrigger.call(this, 'ajaxLoad');
      }, false);
     
      realXHR.addEventListener('timeout', function () {
        ajaxEventTrigger.call(this, 'ajaxTimeout');
      }, false);
     
      realXHR.addEventListener('readystatechange', function() {
        ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
      }, false);
     
      return realXHR;
     }
     
     window.XMLHttpRequest = newXHR;
     self._startLintenAjax();
  },
  _startLintenAjax() {
    // ajax error
    window.addEventListener("error", function(err) {
      ajaxError(err);
    });
    
    // ajax timeout
    window.addEventListener("ajaxTimeout", function(err) {
      ajaxError(err);
    });

    // ajax load error
    window.addEventListener("ajaxLoad", function(err) {
      ajaxError(err);
    });
  },
  _send: function () {},
}

module.exports = InitMonitor;