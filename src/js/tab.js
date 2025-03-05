// Get data from URL parameters
const urlParams = new URLSearchParams(window.location.hash.substring(1));
const tabId = urlParams.get('tabId');
const url = decodeURIComponent(urlParams.get('url') || '');
const title = decodeURIComponent(urlParams.get('title') || 'Suspended Tab');

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

// Update the UI with the info from URL parameters
updateTabInfo(title, url);
