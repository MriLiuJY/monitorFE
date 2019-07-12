
/* eslint-disable */
function Monitor(InitMonitor) {
  const self = this;
  self._InitMonitor = InitMonitor;
  return self;
}

Monitor.prototype = {
  _destory: function() {
    const self = this;
    const array = self._InitMonitor._getEvent();
    for (let i = 0; i < array.length; i++) {
      window.removeEventListener(array[i].type, array[i].func);
    }
  },
}

module.exports = Monitor;