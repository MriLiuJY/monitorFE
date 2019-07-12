/**
 * @file event center
 * @author JYkid
 * @version 0.0.1-beta
 */

function EventCenter() {
  const self = this;
  const data = [];
  self.data = data;
  return self;
}

EventCenter.prototype = {
  _get() {
    const self = this;
    return self.data;
  },
  _set(event) {
    const self = this;
    self.data.push(event);
  },
};

module.exports = EventCenter;
