import { test, expect } from "@playwright/test";

test("User logs in, adds product, verifies in cart, logs out", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  const productName = await page.locator(".inventory_item_name").first().innerText();

  await page.locator(".btn_inventory").first().click();

  await page.click(".shopping_cart_link");


  await expect(page.locator(".inventory_item_name")).toHaveText(productName);

  await page.click("#react-burger-menu-btn");
  await page.click("#logout_sidebar_link");
});
