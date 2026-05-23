# sembark-tech-assignment

A modern and responsive e-commerce frontend application built using React, TypeScript, Vite, Tailwind CSS, and Context API.

---

## Features

- Product Listing Page
- Product Detail Page
- Shopping Cart Functionality
- Add Products to Cart
- Remove Products from Cart
- Quantity Management
- Persistent Cart using localStorage
- Fully Responsive Design
- Dynamic Routing with React Router
- Loading States & Error Handling
- **E2E Testing:** Robust test coverage for core interactions (homepage loading and add-to-cart flows) powered by Playwright.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- Playwright
---

## Project Structure

```bash
src/
├── components/     # Reusable UI components
├── context/        # Context API state management
├── pages/          # Application pages
├── services/       # API calls and services
├── types/          # TypeScript type definitions
├── App.tsx         # Main application component
```

---

## API Used

### Products API

```bash
https://api.escuelajs.co/api/v1/products
```

---

## Installation & Setup

### Clone the repository

```bash
git clone <repo-url>
```

### Navigate to project folder

```bash
cd sembark-tech-assignment
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## Available Routes

| Route | Description |
|---|---|
| `/` | Product Listing Page |
| `/product/:id` | Product Detail Page |
| `/cart` | Shopping Cart Page |

---

## Cart Features

- Add products to cart
- Increase/decrease quantity
- Remove items from cart
- Persistent cart state using `localStorage`

---

## Running Tests

This application uses [Playwright](https://playwright.dev/) for reliable end-to-end testing.

### Install Playwright Browsers

Before running E2E tests for the first time, install the required test browsers:

```bash
npx playwright install
```

### Run Tests

To run E2E test scenarios locally:

```bash
# Make sure your dev server is running (npm run dev) in another terminal window
npx playwright test
```

---


## Future Improvements

- Product Search
- Category Filters
- Sorting Functionality
- Wishlist Feature
- Checkout Flow
- Toast Notifications
- Skeleton Loaders

---

## Author

### Himanshu Yadav