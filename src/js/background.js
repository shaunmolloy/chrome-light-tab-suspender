/* global chrome */

// Import dependencies
importScripts(
  'vendor/browser-polyfill.js',
  'helpers/promise.js',
  'helpers/suspend.js',
  'helpers/commands.js'
);

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'suspend_tab':
      commands.suspendTabCommand();
      break;
  }
});
