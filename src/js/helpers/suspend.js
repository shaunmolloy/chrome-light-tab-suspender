/* global promise */

const suspendUrl = `chrome-extension://${chrome.runtime.id}/tab.html`;

function getUrl(url) {
  const uri = new URL(url).hash;
  const params = new URLSearchParams(uri.substring(1));
  return params.get('url');
}

window.suspend = {};

suspend.suspend = ((tab) => {
  const url = `${suspendUrl}#url=${tab.url}`;
  localStorage.setItem('title', tab.title);
  localStorage.setItem('url', tab.url);

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
  promise.tabsUpdate(tab.id,{ url: getUrl(tab.url) });
});
