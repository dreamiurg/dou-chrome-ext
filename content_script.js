var pageInfo = {
  "title": document.title,
  "url": window.location.href,
  "description": window.getSelection().toString()
};

// pass information to listeners, presumably in popup.html
chrome.extension.connect().postMessage(pageInfo);
