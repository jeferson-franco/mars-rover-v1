const { test, expect } = require('@playwright/test');

test.describe('Mars Rover E2E Tests', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should allow user to input commands and see rover movement', async () => {
    await page.fill('[data-testid="command-input"]', 'MMLR');
    await page.click('[data-testid="execute-button"]');
    await page.waitForSelector('[data-testid="rover-position"]');
    const position = await page.textContent('[data-testid="rover-position"]');
    expect(position).toContain('x: -1, y: 3, direction: N');
  });

  test('should display error for invalid commands', async () => {
    await page.fill('[data-testid="command-input"]', 'INVALID');
    await page.click('[data-testid="execute-button"]');
    await page.waitForSelector('[data-testid="error-message"]');
    const errorMessage = await page.$eval(
      '[data-testid="error-message"]',
      (el) => el.textContent,
    );
    expect(errorMessage).toBeVisible();
  });

  test('should update grid visualization correctly', async () => {
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
