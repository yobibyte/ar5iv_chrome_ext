# Automatic arxiv->ar5iv link replacement in Chrome.

This chrome extension will automatically replace arxiv.org/pdf/* links with ar5iv links for more web-friendly reading. Additionally, clicking on the extension's icon will take you to the alternate version.

## Installation

1. Clone the repo `git@github.com:yobibyte/ar5iv_chrome_ext.git`

2. Go to `chrome://extensions/` and turn on the developer mode

3. Press to `Load unpacked` and select the repo folder to open.

## Usage

The extension will automatically replace arxiv pdf links with ar5iv html links per default.
You can click the extension's icon to toggle this behavior.

- if the icon is crossed out, the extension will always load pdfs (replace ar5iv html links with arxiv pdf links).
- if the icon is not crossed out, the extension will always load html (replace arxiv pdf links with ar5iv html links).
