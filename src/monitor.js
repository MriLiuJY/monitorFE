
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
      // event type add different stage
      if (array[i].type === 'error') {
        window.removeEventListener(array[i].type, array[i].func, true);
      } else {
        window.removeEventListener(array[i].type, array[i].func);
      }
    }
  },
}

module.exports = Monitor;