/* global ExtensionAPI:false */

const { classes: Cc, interfaces: Ci, utils: Cu } = Components;

this.readerLabel = class API extends ExtensionAPI {
  getAPI(context) {
    return {
      readerLabel: {
        setIcon: (icon, width) => {
          // eslint-disable-next-line mozilla/use-services
          const WindowMediator = Cc["@mozilla.org/appshell/window-mediator;1"]
            .getService(Ci.nsIWindowMediator);
          const browser = WindowMediator.getMostRecentWindow("navigator:browser");
          const iconImage = browser.document.getElementById("reader-mode-button");
          // FIXME: verify that icon is a URL:
          iconImage.style.listStyleImage = `url(${icon})`;
          iconImage.style.width = `${width}px`;
          return true;
        }
      }
    };
  }
};
