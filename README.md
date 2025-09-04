# JiraLinky

This Chrome extension allows users to copy the current page's title to the clipboard with a simple click on the extension icon.

## Features

- Copies the title of the current webpage to the clipboard.
- Easy to use with a single click.

## Installation

1. Clone the repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `chrome-extension` directory.
5. The extension should now be installed and visible in your extensions list.

## Usage

- Click on the extension icon in the Chrome toolbar.
- The title of the current page will be copied to your clipboard.

## Files

- `src/background.js`: Background script that listens for icon clicks and sends messages to the content script.
- `src/content.js`: Content script that handles copying the page title to the clipboard.
- `src/manifest.json`: Configuration file for the Chrome extension.

## License

This project is licensed under the MIT License.