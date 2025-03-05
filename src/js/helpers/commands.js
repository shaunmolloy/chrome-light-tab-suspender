/* global chrome, promise, suspend, suspendUrl */

const commands = {};

commands.suspendTabCommand = (() => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (typeof tab === 'undefined') {
      return;
    }

    if (tab.url.includes(suspendUrl)) {
      suspend.unsuspend(tab);
    } else {
      suspend.suspend(tab);
    }
  });
});

// Export for service worker context
self.commands = commands;
