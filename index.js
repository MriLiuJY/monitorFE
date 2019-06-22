/**
 * @file main js at project
 * @author
 * @version 0.0.1-beta
 */

import monitor from "./src/index";

function Shell(window, func) {
  if (!window.func) {
    window.initMonitor = func;
  }
}

Shell(window, monitor);
