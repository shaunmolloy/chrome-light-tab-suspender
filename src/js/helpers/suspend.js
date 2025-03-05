/* global promise */

const suspendUrl = `chrome-extension://${chrome.runtime.id}/tab.html`;

function getUrl(url) {
  const uri = new URL(url).hash;
  const params = new URLSearchParams(uri.substring(1));
  return params.get('url');
}

const suspend = {};

// Store tab information in chrome.storage instead of localStorage
suspend.suspend = ((tab) => {
  const url = `${suspendUrl}#tabId=${tab.id}&url=${tab.url}`;
  
  // Store data in chrome.storage.session
  chrome.storage.session.set({
    [`tab_${tab.id}_title`]: tab.title,
    [`tab_${tab.id}_url`]: tab.url
  });

  promise.tabsUpdate(tab.id, { url })
    .then(() => {
      const request = {
        action: 'updateSuspendedTab',
        title: tab.title,
        url: tab.url,
      };

      promise.sendMessage(tab.id, request);
    });
});

suspend.unsuspend = ((tab) => {
  promise.tabsUpdate(tab.id, { url: getUrl(tab.url) });
});

// Export for service worker context
self.suspend = suspend;
