/* global chrome, commands */

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'suspend_tab':
      commands.suspendTabCommand();
      break;
  }
});
