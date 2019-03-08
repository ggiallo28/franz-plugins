"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('widget-link badge-notification unread-notifications').length > 0) {
      if (document.getElementsByClassName('widget-link badge-notification unread-notifications')[0].text != null) {
        count = parseInt(document.getElementsByClassName('widget-link badge-notification unread-notifications')[0].text, 10);
      }
    }

    count = parseInt(count, 10);

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
