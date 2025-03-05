/* global chrome */

const promise = {};

promise.sendMessage = ((tabId, item) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, item, response => {
      if (response && response.complete) {
        resolve(response);
      } else {
        reject('Something went wrong');
      }
    });
  });
});

promise.tabsUpdate = ((tabId, properties) => {
  return new Promise((resolve) => {
    resolve(chrome.tabs.update(tabId, properties, resolve));
  });
});

// Export for service worker context
self.promise = promise;
