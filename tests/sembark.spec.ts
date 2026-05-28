import { test, expect } from "@playwright/test";

//Homepage
test("homepage loads successfully", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page.getByText("Products")).toBeVisible();
});

//Add to Cart
test("user can add product to cart", async ({ page }) => {
  // Go to homepage first
  await page.goto("http://localhost:5173");

  // Wait for the products to load (first product link to be visible)
  const firstProductLink = page.locator("a[href^='/product/']").first();
  await expect(firstProductLink).toBeVisible({ timeout: 10000 });

  // Click the first product link to navigate to the product detail page
  await firstProductLink.click();

  // wait for button to appear
  const addToCartButton = page
    .getByRole("button", {
      name: /add to cart/i,
    })
    .first();

  await expect(addToCartButton).toBeVisible();

  await addToCartButton.click();

  await expect(page.getByText(/cart \(1\)/i)).toBeVisible();
});

//Filter
test("user can filter products using categories", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const firstCheckbox = page.locator("input[type='checkbox']").first();

  await firstCheckbox.check();

  await expect(page).toHaveURL(/category=/);
});

//Sort
test("user can sort products and URL updates correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Select sorting option
  await page.selectOption("select", "low-to-high");

  // Check URL contains sort query
  await expect(page).toHaveURL(/sort=low-to-high/);

  // Refresh page
  await page.reload();

  // Verify sorting option is still selected after refresh
  await expect(page.locator("select")).toHaveValue("low-to-high");
});
