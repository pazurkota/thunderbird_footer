const DEFAULT_MARKDOWN = `**pazurkota**
hello world!
[test@example.com](mailto:test@example.com)`;

const textarea = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const saveBtn = document.getElementById("save-btn");
const status = document.getElementById("status");

function renderPreview() {
    preview.innerHTML = DOMPurify.sanitize(marked.parse(textarea.value));
}

async function loadFooter() {
    const stored = await browser.storage.local.get("footerMarkdown");
    textarea.value = stored.footerMarkdown ?? DEFAULT_MARKDOWN;
    renderPreview();
}

async function saveFooter() {
    const markdown = textarea.value;
    const html = DOMPurify.sanitize(marked.parse(markdown));

    await browser.storage.local.set({
        footerMarkdown: markdown,
        footerHtml: html
    });

    status.textContent = "Saved ✓";
    setTimeout(() => (status.textContent = ""), 2000);
}

textarea.addEventListener("input", renderPreview);
saveBtn.addEventListener("click", saveFooter);

loadFooter();