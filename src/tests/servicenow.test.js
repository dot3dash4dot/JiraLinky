const { extractGetLinksFunction, loadTestHtml } = require('./test-utils');

let getLinks;
const sourcePath = "test-pages/servicenow-change-request.html";
const url = "https://dev12345.servicenow.com/some-servicenow-path";

describe('getLinks - ServiceNow', () => {
    beforeAll(() => {
        getLinks = extractGetLinksFunction();
    });

    beforeEach(() => {
        const html = loadTestHtml(sourcePath);
        document.body.innerHTML = html;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return correct Markdown and HTML links', () => {
        const links = getLinks(url);

        const expectedTitle = "CHG1234567";

        expect(links).not.toBeNull();
        expect(links.markdownLink).toBe(`[${expectedTitle}](${url})`);
        expect(links.htmlLink).toBe(`<a href="${url}">${expectedTitle}</a>`);
    });

    test('should return null if relevant element is missing', () => {
        // Remove all elements starting with sys_readonly
        document.querySelector('[id^="sys_readonly"]').remove();

        const links = getLinks(url);

        expect(links).toBeNull();
    });

    test('should return null for unknown URLs', () => {
        const invalidUrl = "https://example.com/some-page";
        const links = getLinks(invalidUrl);

        expect(links).toBeNull();
    });
});