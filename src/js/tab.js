// Get data from URL parameters
const urlParams = new URLSearchParams(window.location.hash.substring(1));
const tabId = urlParams.get('tabId');
const url = decodeURIComponent(urlParams.get('url'));
const title = decodeURIComponent(urlParams.get('title') || 'Suspended Tab');
const favicon = decodeURIComponent(urlParams.get('favicon'));

/**
 * Update the URL of the suspended tab
 **/
function updateUrl(url) {
  if (!url) return;
  const urlEl = document.querySelector('.url');
  if (!urlEl) return;
  urlEl.innerHTML = url;
}

/**
 * Update the title of the suspended tab
 **/
function updateTitle(title) {
  if (!title) return;
  document.title = title;
  const titleEl = document.querySelector('.title');
  if (!titleEl) return;
  titleEl.innerHTML = title;
}

/**
 * Update the favicon of the suspended tab
 **/
function updateFavicon(favicon) {
  if (!favicon) return;
  const headEl = document.querySelector('head');
  const iconEl = headEl.querySelector('link[rel="icon"]');
  if (iconEl) return;
  const linkEl = document.createElement('link');
  linkEl.rel = 'icon';
  linkEl.type = 'image/png';
  linkEl.href = favicon;
  headEl.appendChild(linkEl);
}

/**
 * Update the suspended tab with the URL, title, and favicon
 **/
function updateTabInfo(url, title, favicon) {
  updateUrl(url);
  updateTitle(title);
  updateFavicon(favicon);
}

updateTabInfo(url, title, favicon);
