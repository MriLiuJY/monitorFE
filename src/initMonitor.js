/**
 * @file init func
 * @author JYkid
 * @version 0.0.1-beta
 */

import Config from "./config";
import { getError, ajaxError } from "./error";
import EventCenter from "./eventCenter";

/* eslint-disable */
function InitMonitor(userConfig) {
  let self = this;
  let config = new Config(userConfig);
  self._config = config;

  self._config.protocol = window.location.protocol + "//";
  if (config.https) {
    self._config.protocol = 'https://';
  }
  const eventCenter = new EventCenter();
  self._eventCenter = eventCenter;
  
  self._initListenJS();
  self._initListenAjax();
}

InitMonitor.prototype = {
  _initListenJS: function() {
    const self = this;
    // 监听全局下的error事件
    const error = function(err) {
      console.log(err);
      if (err.filename.indexOf('monitor') > -1 || process.env.NODE_ENV === 'development') {
        return;
      } else {
        getError(err, self._config);
      }
    }
    window.addEventListener("error", error, true);
    self._setEvent(error);

    // 监听全局下的 Promise 错误
    const unhandledrejection = function(err){
      getError(err, self._config);
      return true;
    }
    window.addEventListener("unhandledrejection", unhandledrejection);
    self._setEvent(unhandledrejection);
  },
  _initListenAjax: function () {
    let self = this;
    function ajaxEventTrigger(event) {
      var ajaxEvent = new CustomEvent(event, { detail: this });
      window.dispatchEvent(ajaxEvent);
    };
    
    var oldXHR = window.XMLHttpRequest;

    function newXHR() {
      var realXHR = new oldXHR();
     
      realXHR.addEventListener('load', function () {
        ajaxEventTrigger.call(this, 'ajaxLoad');
      }, false);
     
      realXHR.addEventListener('timeout', function () {
        ajaxEventTrigger.call(this, 'ajaxTimeout');
      }, false);
     
      realXHR.addEventListener('readystatechange', function() {
        ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
      }, false);
     
      return realXHR;
    };
     
     window.XMLHttpRequest = newXHR;
     self._startLintenAjax();
  },
  _startLintenAjax: function() {
    const self = this;
    
    // ajax timeout
    window.addEventListener("ajaxTimeout", function(err) {
      if (err.detail.responseURL.indexOf(self._config.url) > -1) {
        return;
      } else {
        ajaxError(err, self._config);
      }
    });

    // ajax load error
    window.addEventListener("ajaxLoad", function(err) {
      if (err.detail.responseURL.indexOf(self._config.url) > -1) {
        return;
      } else {
        ajaxError(err, self._config);
      }
    });
  },
  _setEvent: function(event) {
    const self = this;
    self._eventCenter._set(event);
  },
}

module.exports = InitMonitor;