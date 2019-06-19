/* eslint-disable */
function initMonitor(config) {
  console.log(config);
  return config;
}

if (window) {
  window.initMonitor = initMonitor;
}
