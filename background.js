const HTML_FOOTER = `
  <div style="font-family: Arial, sans-serif; font-size: 13px; color: #333; margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px;">
    <strong>pazurkota</strong><br>
    hello!<br>
    <a href="mailto:test@example.com">test@example.com</a>
  </div>
`;

browser.compose.onBeforeSend.addListener(async (tab, details) => {
    if (details.isPlainText) {
        return {};
    }

    if (details.body.includes("stopka-marker-id")) {
        return {};
    }

    return {
        details: {
            body: details.body + `<div id="stopka-marker-id">${HTML_FOOTER}</div>`
        }
    };
});

browser.compose.setComposeDetails(tab.id, {isPlainText: false})