const suspendUrl = `chrome-extension://${chrome.runtime.id}/tab.html`;

function suspend(tab) {
  const url = `${suspendUrl}#url=${tab.url}`;
  chrome.tabs.update(tab.id, { url }); 
}

function unsuspend(tab) {
  chrome.tabs.update(tab.id, { url: getUrl(tab.url) });
}

function getUrl(url) {
  const uri = new URL(url).hash;
  const params = new URLSearchParams(uri.substring(1));
  return params.get('url');
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "suspend_tab") {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (tab === null) {
        return;
      }

      if (tab.url.includes(suspendUrl)) {
        unsuspend(tab);
      } else {
        suspend(tab);
      }
    });
  }
});
