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

// Handle browser action (extension icon) click
chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes(suspendUrl)) {
    suspend.unsuspend(tab);
  } else {
    suspend.suspend(tab);
  }
});
