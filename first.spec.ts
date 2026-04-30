import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.redtag.ca/');
  await page.getByRole('tab', { name: 'Flights' }).click();
  await page.locator('label').filter({ hasText: 'Multi City' }).click();
  await page.getByText('Enter City or Airport').first().click();
  await page.locator('#flt_departure1').pressSequentially('can');
  await page.getByText('YTO').click();
  await page.getByText('Enter City or Airport').first().click();
  await page.locator('#flt_destionation1').pressSequentially('cancun');
  await page.getByText('CUN', { exact: true }).click();
  await page.locator('#flt_leg1Date').click();
  await page.getByRole('button', { name: 'Move forward to switch to the' }).click();
  await page.getByRole('button', { name: 'Move forward to switch to the' }).click();
  await page.getByRole('button', { name: 'Move forward to switch to the' }).click();
  await page.getByRole('button', { name: '19' }).first().click();
  await page.getByText('Enter City or Airport').first().click();
  await page.locator('#flt_departure2').pressSequentially('cancu');
  await page.getByText('CUN', { exact: true }).click();
  await page.getByText('Enter City or Airport').click();
  await page.locator('#flt_destionation2').pressSequentially('lond');
  await page.getByText('LHR').click();
  await page.locator('#flt_leg2Date').click();
  await page.getByRole('button', { name: 'Move forward to switch to the' }).click();
  await page.getByRole('button', { name: 'Move forward to switch to the' }).click();
  await page.getByRole('button', { name: 'Move forward to switch to the' }).click();
  await page.getByRole('button', { name: '26' }).first().click();
  await page.getByLabel('Adults:').selectOption('4');
  await page.getByRole('checkbox', { name: 'Add Accommodations' }).uncheck();
  await page.getByRole('button', { name: 'Search Now' }).click();
  await page.getByText('Searching flights').click();
  await page.getByText(/^NonStop ()/).check();
  await page.getByText(/^Air Canada ()/).check();
  await page.getByText(/^Free Baggages ()/).check();

  const optionalLink = page.getByRole('link', { name: 'here', exact: true });

  if (await optionalLink.isVisible({ timeout: 3000 })) {
    console.log('Optional link appeared, clicking...');
    await optionalLink.click();
} else {
    console.log('Optional link did not appear, skipping step.');
}

  await page.getByText('Economy Class').click();
  await page.getByRole('option', { name: 'First Class' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Searching flights').click();
  await page.getByText(/^Sort by /).click();
  await page.getByRole('option', { name: 'Sort by Price (High to Low)' }).click();
  await console.log('success');
});