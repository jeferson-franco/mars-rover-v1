const puppeteer = require('puppeteer');

describe('Mars Rover E2E Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should allow user to input commands and see rover movement', async () => {
    await page.type('[data-testid="command-input"]', 'MMLR');
    await page.click('[data-testid="execute-button"]');
    const roverPosition = await page.$eval(
      '[data-testid="rover-position"]',
      (el) => el.textContent,
    );
    expect(roverPosition).toContain('x: -1, y: 2, direction: N');
  });
});
