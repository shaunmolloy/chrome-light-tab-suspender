/* global chrome */

async function updateSuspendedTab(request) {
  localStorage.setItem('title', request.title);
  localStorage.setItem('url', request.url);
  return true;
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  let complete = false;

  switch (request.action) {
    case 'updateSuspendedTab':
      complete = await updateSuspendedTab(request);
      break;
  }

  sendResponse({ complete });
  return true;
});
