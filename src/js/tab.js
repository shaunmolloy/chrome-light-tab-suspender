// Get the tab ID from the URL (we'll add it in the background script)
const urlParams = new URLSearchParams(window.location.hash.substring(1));
const tabId = urlParams.get('tabId');

// Function to update the UI with tab info
function updateTabInfo(title, url) {
  document.title = title;
  const titleEl = document.querySelector('.title');
  if (titleEl !== null) {
    titleEl.innerHTML = title;
  }

  const urlEl = document.querySelector('.url');
  if (urlEl !== null) {
    urlEl.innerHTML = url;
  }
}

// Get data from chrome.storage.session
chrome.storage.session.get([`tab_${tabId}_title`, `tab_${tabId}_url`], (result) => {
  const title = result[`tab_${tabId}_title`] || 'Suspended Tab';
  const url = result[`tab_${tabId}_url`] || '';
  updateTabInfo(title, url);
});
