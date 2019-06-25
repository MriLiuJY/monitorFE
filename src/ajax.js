/**
 * @file ajax request file
 * @author JYkid
 * @version 0.0.1-beta
 */


/* eslint-disable */
const ajax =  (function() {
  return {
    canAjax: function() {
      return (window.XMLHttpRequest && window.JSON);
    },
    post: function(config, url, data, timeout) {
      var xhr = new XMLHttpRequest();
      xhr.open(config.type, url, true);
      xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.withCredentials = true;
      xhr.timeout = timeout || 30000;
      xhr.onload = function () {
        var result = window.JSON.parse(xhr.responseText);
        if (result.status === 1) {
          changeStatus()
        }
      };
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var result = window.JSON.parse(xhr.responseText);
            if (result.status === 1) {
              changeStatus()
            }
          } else {
            throw new Error("网络请求错误，请稍后再试～");
          }
        }
      };
      xhr.send(window.JSON.stringify(data));
    } 
  }
})();

module.exports = {
  ajax,
}
