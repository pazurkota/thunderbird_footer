# HTML Footer

A Thunderbird extension that automatically appends an editable HTML footer (written in Markdown) to every new email you compose.

## Features

- Automatically inserts a footer into outgoing HTML emails before they are sent.
- Footer content is written in Markdown and converted to HTML using [marked](https://github.com/markedjs/marked).
- Rendered HTML is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify) before being previewed or stored.
- Footer is only added once per message (detected via a marker element), so it won't be duplicated on replies or edits.
- Plain-text emails are left untouched.
- Settings page with a live Markdown/HTML preview for editing the footer.

## How it works

- `background.js` listens for the `compose.onBeforeSend` event and injects the stored footer HTML into the message body, unless the message is plain text or already contains the footer.
- `options.html` / `options.js` provide the settings UI (opened as a browser action options tab) where you can write your footer in Markdown, see a live preview, and save it. Both the Markdown source and the rendered HTML are stored via `browser.storage.local`.

## Installation (development)

1. Open Thunderbird and go to **Add-ons and Themes**.
2. Click the gear icon and choose **Debug Add-ons**.
3. Click **Load Temporary Add-on...** and select the `manifest.json` file in this repository.
4. Open the extension's options page to edit your footer.

## Project structure

```
manifest.json     Extension manifest (Manifest V3)
background.js     Injects the footer into outgoing emails
options.html       Settings page markup
options.js         Settings page logic (Markdown editing, preview, save)
libs/              Bundled third-party libraries (marked, DOMPurify)
```

## Requirements

- Thunderbird 115.0 or later
