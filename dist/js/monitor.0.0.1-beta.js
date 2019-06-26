/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "20nU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file config detail file
 * @author JYkid
 * @version 0.0.1-beta
 */
function Config(conf) {
  const self = this;

  self._extend(self, conf);
}

Config.prototype = {
  https: true,
  post: true,
  url: "/v1/monitor",
  _extend: (self, conf) => {
    Object.keys(conf).map(x => {
      self[x] = conf[x];
      return;
    });
    return self;
  }
};
module.exports = Config;

/***/ }),

/***/ "QfWi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = _interopRequireDefault(__webpack_require__("tjUo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file main js at project
 * @author
 * @version 0.0.1-beta
 */
function Shell(window, func) {
  if (!window.func) {
    window.initMonitor = func;
  }
}

Shell(window, _index.default);

/***/ }),

/***/ "f6yO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = _interopRequireDefault(__webpack_require__("20nU"));

var _error = __webpack_require__("xziN");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file init func
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
function InitMonitor(userConfig) {
  let self = this;
  let config = new _config.default(userConfig);
  self._config = config;

  self._initListenJS();

  self._initListenAjax();
}

InitMonitor.prototype = {
  _initListenJS: function () {
    // 监听全局下的error事件
    window.addEventListener("error", function (err) {
      (0, _error.getError)(err);
    }, true);
  },
  _initListenAjax: function () {
    let self = this;

    function ajaxEventTrigger(event) {
      var ajaxEvent = new CustomEvent(event, {
        detail: this
      });
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
      realXHR.addEventListener('readystatechange', function () {
        ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
      }, false);
      return realXHR;
    }

    window.XMLHttpRequest = newXHR;

    self._startLintenAjax();
  },

  _startLintenAjax() {
    // ajax error
    window.addEventListener("error", function (err) {
      (0, _error.ajaxError)(err);
    }); // ajax timeout

    window.addEventListener("ajaxTimeout", function (err) {
      (0, _error.ajaxError)(err);
    }); // ajax load error

    window.addEventListener("ajaxLoad", function (err) {
      (0, _error.ajaxError)(err);
    });
  },

  _send: function () {}
};
module.exports = InitMonitor;

/***/ }),

/***/ "oLOV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file ajax request file
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
const ajax = function () {
  return {
    canAjax: function () {
      return window.XMLHttpRequest && window.JSON;
    },
    post: function (url, data, timeout) {
      var xhr = new XMLHttpRequest();
      xhr.open("post", url, true);
      xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.withCredentials = true;
      xhr.timeout = timeout || 30000;

      xhr.onload = function () {
        var result = window.JSON.parse(xhr.responseText);

        if (result.status === 1) {
          changeStatus();
        }
      };

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var result = window.JSON.parse(xhr.responseText);

            if (result.status === 1) {
              changeStatus();
            }
          } else {
            throw new Error("网络请求错误，请稍后再试～");
          }
        }
      };

      xhr.send(window.JSON.stringify(data));
    },
    getWraper: function (err, Wrap) {
      let wrap = new Wrap();

      let data = wrap._geWrap();

      wrap._getIP(function (ip) {
        data.ip = ip;
      });

      if (err.type === "ajaxLoad") {
        data.responseURL = err.detail.responseURL;
        data.status = err.detail.status;
        data.statusText = err.detail.statusText;
      } else if (err.type === "error") {
        data.message = err.message;
        data.line = err.lineno;
        data.filename = err.filename;
      }

      console.log(err);
      return data;
    }
  };
}();

module.exports = {
  ajax
};

/***/ }),

/***/ "pB/M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file get browser && platform parameter
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
function Wrap() {
  const self = this;
  self.data = self._geWrap();
}

Wrap.prototype = {
  // 获取 UA 基本信息
  _geWrap: function () {
    let data = {};
    let navigator = window.navigator; // UA

    data.userAgent = navigator.userAgent; // appName

    data.appName = navigator.appName; // appVersion

    data.appVersion = navigator.appVersion; // CPU

    data.cpuClass = navigator.cpuClass; // platform

    data.platform = navigator.platform; // product

    data.product = navigator.product; // languages

    data.language = navigator.language; // url

    data.url = window.location.href; // time

    data.time = new Date().getTime();
    return data;
  },
  // webrtc 获取 IP
  _getIP: function (onNewIP) {
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

    var pc = new myPeerConnection({
      iceServers: [{
        urls: "stun:stun01.sipphone.com"
      }, {
        urls: "stun:stun.ekiga.net"
      }, {
        urls: "stun:stun.fwdnet.net"
      }, {
        urls: "stun:stun.l.google.com:19302"
      }, {
        urls: "stun:stun.l.google.com:19302"
      }, {
        urls: "stun:stun.l.google.com:19302"
      }]
    }),
        noop = function () {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

    function iterateIP(ip) {
      if (!localIPs[ip]) {
        onNewIP(ip);
      }

      localIPs[ip] = true;
    } //create a bogus data channel


    pc.createDataChannel(""); // create offer and set local description

    pc.createOffer().then(function (sdp) {
      sdp.sdp.split('\n').forEach(function (line) {
        if (line.indexOf('candidate') < 0) return;
        line.match(ipRegex).forEach(iterateIP);
      });
      pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {// An error occurred, so handle the failure to connect
    }); //listen for candidate events

    pc.onicecandidate = function (ice) {
      if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
  }
};
module.exports = Wrap;

/***/ }),

/***/ "tjUo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _initMonitor = _interopRequireDefault(__webpack_require__("f6yO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file main js at project
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
function monitor(userConfig) {
  const init = new _initMonitor.default(userConfig);
  return init;
}

monitor.prototype = {
  _destory: function () {}
};
module.exports = monitor;

/***/ }),

/***/ "xziN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getError = exports.ajaxError = exports.getServerError = void 0;

var _ajax = __webpack_require__("oLOV");

var _wrap = _interopRequireDefault(__webpack_require__("pB/M"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file error event center
 * @author JYkid
 * @version 0.0.1-beta
 */

/* eslint-disable */
// 服务端返回错误
const getServerError = function () {}; // 


exports.getServerError = getServerError;

const ajaxError = function (err) {
  // 处理err 上报
  if (err.type === "ajaxLoad" && err.detail.status > 300) {
    let data = _ajax.ajax.getWraper(err, _wrap.default);

    _ajax.ajax.post("/monitor", data, function () {}, function (error) {
      console.log(error);
    });
  }
}; // js 内部运行错误


exports.ajaxError = ajaxError;

const getError = function (err) {
  // 可以被取消的是js抛出的错误
  if (err.cancelable) {
    getJsError(err);
  } else {
    geetResourceError(err);
  }
}; // js 抛出的错误


exports.getError = getError;

const getJsError = function (err) {
  console.log(err); // 处理err 上报

  let data = _ajax.ajax.getWraper(err, _wrap.default);

  _ajax.ajax.post("/monitor", data, function () {}, function (error) {
    console.log(error);
  });
}; // 资源加载错误


const geetResourceError = function (err) {
  console.log(err);
  console.log("geetResourceError");
};

/***/ })

/******/ });