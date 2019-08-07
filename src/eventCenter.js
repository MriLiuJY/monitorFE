/**
 * @file event center && record center
 * @since 0.0.2
 * @author JYkid
 * @version 0.0.2
 */

function EventCenter() {
  const self = this;
  const data = [];
  const record = [];
  self.data = data;
  self.record = record;
  return self;
}

EventCenter.prototype = {
  _get() {
    const self = this;
    return self.data;
  },
  _getRecord() {
    const self = this;
    return self.record;
  },
  _set(event) {
    const self = this;
    self.data.push(event);
  },
  /**
   * push record event data in Array
   * @param { Object } event
   */
  _setRecord(event) {
    const self = this;
    self.record.push(event);
  },
  /**
   * clear event center data
   */
  _clearRecord() {
    const self = this;
    self.record.splice(0, self.record.length);
  },
};

module.exports = EventCenter;
