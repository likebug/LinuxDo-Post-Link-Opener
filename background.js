chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openTab') {
    chrome.tabs.create({
      url: request.url,
      active: false,
      index: sender.tab.index + 1
    });
  }
});
