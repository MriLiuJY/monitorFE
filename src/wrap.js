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
  _geWrap: function() {
    let data = {};
    let navigator = window.navigator;

    // UA
    data.userAgent = navigator.userAgent;

    // appName
    data.appName= navigator.appName;

    // appVersion
    data.appVersion = navigator.appVersion;

    // CPU
    data.cpuClass = navigator.cpuClass;

    // platform
    data.platform = navigator.platform;

    // product
    data.product = navigator.product;

    // languages
    data.language = navigator.language;

    // url
    data.url = window.location.href;

    // time
    data.time = (new Date()).getTime();

    return data;
  },
  // webrtc 获取 IP
  _getIP: function(onNewIP) {
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: [
          {
            urls: "stun:stun01.sipphone.com"
          },
          {
            urls: "stun:stun.ekiga.net"
          },
          {
            urls: "stun:stun.fwdnet.net"
          },
          {
            urls: "stun:stun.l.google.com:19302"
          },
          {
            urls: "stun:stun.l.google.com:19302"
          },
          {
            urls: "stun:stun.l.google.com:19302"
          }
        ]
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

    function iterateIP(ip) {
        if (!localIPs[ip]) {
          onNewIP(ip);
        }
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function(reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
  },
}

module.exports = Wrap;