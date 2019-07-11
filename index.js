/**
 * @file main js at project
 * @author
 * @version 0.0.1-beta
 */

import Index from "./src/index";

function Shell(window) {
  if (!window.initMonitor) {
    window.initMonitor = Index;
  }
}

Shell(window);
