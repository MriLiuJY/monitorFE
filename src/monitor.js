
/* eslint-disable */
import rrwebPlayer from "rrweb-player";

function Monitor(InitMonitor) {
  const self = this;
  self._InitMonitor = InitMonitor;
  return self;
}

Monitor.prototype = {
  _destory() {
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
  _replay() {
    const self = this;
    const events = self._InitMonitor._getRrwebEvent();
    new rrwebPlayer({
      // events: events,
      target: self._InitMonitor._config.area,
      data: { events },
    });
    // rrweb.play();
  },
}

module.exports = Monitor;