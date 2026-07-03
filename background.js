const FOOTER_MARKER = "footer-marker-id";

const DEFAULT_HTML = `
  <div style="font-family: Arial, sans-serif; font-size: 13px; color: #333;">
    <strong>pazurkota</strong><br>hello world!
  </div>
`;

browser.compose.onBeforeSend.addListener(async (tab, details) => {
    if (details.isPlainText) {
        return {};
    }

    if (details.body.includes(FOOTER_MARKER)) {
        return {};
    }

    const stored = await browser.storage.local.get("footerHtml");
    const footerHtml = stored.footerHtml ?? DEFAULT_HTML;

    return {
        details: {
            body: `${details.body}<div id="${FOOTER_MARKER}" style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px;">${footerHtml}</div>`
        }
    };
});