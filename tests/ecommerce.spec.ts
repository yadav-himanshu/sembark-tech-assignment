import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");

  await expect(
    page.getByText("Products")
  ).toBeVisible();
});

test("user can add product to cart", async ({
  page,
}) => {
  // Go to homepage first
  await page.goto("http://localhost:5173");

  // Wait for the products to load (first product link to be visible)
  const firstProductLink = page.locator("a[href^='/product/']").first();
  await expect(firstProductLink).toBeVisible({ timeout: 10000 });

  // Click the first product link to navigate to the product detail page
  await firstProductLink.click();

  // wait for button to appear
  const addToCartButton = page.getByRole("button", {
    name: /add to cart/i,
  });

  await expect(addToCartButton).toBeVisible();

  await addToCartButton.click();

  await expect(
    page.getByText(/cart \(1\)/i)
  ).toBeVisible();
});