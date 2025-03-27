/* global promise */

const suspendUrl = `chrome-extension://${chrome.runtime.id}/tab.html`;

function getUrl(url) {
  const uri = new URL(url).hash;
  const params = new URLSearchParams(uri.substring(1));
  return decodeURIComponent(params.get('url') || '');
}

const suspend = {};

suspend.suspend = ((tab) => {
  // Include title in the URL parameters (URI encoded)
  const encodedTitle = encodeURIComponent(tab.title);
  const encodedUrl = encodeURIComponent(tab.url);
  const encodedFavicon = encodeURIComponent(tab.favIconUrl);
  const url = `${suspendUrl}#tabId=${tab.id}&url=${encodedUrl}&title=${encodedTitle}&favicon=${encodedFavicon}`;

  promise.tabsUpdate(tab.id, { url });
});

suspend.unsuspend = ((tab) => {
  promise.tabsUpdate(tab.id, { url: getUrl(tab.url) });
});

// Export for service worker context
self.suspend = suspend;
