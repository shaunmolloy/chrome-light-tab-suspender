const title = localStorage.getItem('title');
const url = localStorage.getItem('url');

document.title = title;
const titleEl = document.querySelector('.title');
if (titleEl !== null) {
  titleEl.innerHTML = title;
}

const urlEl = document.querySelector('.url');
if (urlEl !== null) {
  urlEl.innerHTML = url;
}
