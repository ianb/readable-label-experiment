const iconURL = browser.extension.getURL("listen-icon.png");

async function init() {
  await browser.readerLabel.setIcon(iconURL, 74);
}

browser.windows.onCreated.addListener(init);

init();
