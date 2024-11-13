const { chromium } = require('playwright');

describe('Mars Rover E2E Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should allow user to input commands and see rover movement', async () => {
    await page.fill('[data-testid="command-input"]', 'MMLR');
    await page.click('[data-testid="execute-button"]');
    await page.waitForSelector('[data-testid="rover-position"]');
    const position = await page.$eval(
      '[data-testid="rover-position"]',
      (el) => el.textContent,
    );
    expect(position).toContain('x: -1, y: 2, direction: N');
  });

  it('should display error for invalid commands', async () => {
    await page.fill('[data-testid="command-input"]', 'INVALID');
    await page.click('[data-testid="execute-button"]');
    await page.waitForSelector('[data-testid="error-message"]');
    const errorMessage = await page.$eval(
      '[data-testid="error-message"]',
      (el) => el.textContent,
    );
    expect(errorMessage).toBeVisible();
  });

  it('should update grid visualization correctly', async () => {
    await page.fill('[data-testid="command-input"]', 'MM');
    await page.click('[data-testid="execute-button"]');
    await page.waitForSelector('[data-testid=""]');
    const gridClass = await page.$eval(
      '[data-testid=""]',
      (el) => el.className,
    );
    expect(gridClass).toContain('rover-position');
  });
});
