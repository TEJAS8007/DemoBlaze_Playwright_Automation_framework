# 📋 Project Requirements

This document outlines the tools, dependencies, and test cases implemented in the **DemoBlaze Playwright Automation Framework**.

---

## 💻 System Requirements

- **Operating System**: Windows 10 / 11, macOS, or Linux
- **Node.js**: v18 or higher (LTS recommended)
- **npm**: v9 or higher
- **Git**: Installed and configured

---

## 📦 NPM Package Requirements

Installed via `npm install`:

| Package              | Purpose                                  |
|----------------------|------------------------------------------|
| `@playwright/test`   | Playwright test runner                   |
| `faker`              | Generates fake test data                 |
| `log4js`             | Logging framework                        |

> 🔧 To install all packages:
```bash
npm install
🧪 Test Execution
Run the test cases:

bash
Copy
Edit
npx playwright test tests/Flow_Test.spec.js --project=chromium
Generate and view the test report:

bash
Copy
Edit
npx playwright show-report
🛠 Project Structure
pgsql
Copy
Edit
DemoBlaze_Playwright_Automation_Framework/
│
├── Pages/                # Page Object Model classes
│   ├── Home_Page.js
│   ├── Login_Page.js
│   ├── Product_Page.js
│   └── Payment_Page.js
│
├── Utilities/            # Utils, data, and logger
│   ├── Utils.js
│   ├── logger.js
│   └── Data.json
│
├── tests/
│   └── Flow_Test.spec.js # End-to-end user flow test
│
├── logs/                 # Log4js outputs
├── Videos/               # Playwright video recordings
├── package.json
├── playwright.config.js
└── README.md
✅ Test Scenarios and Test Cases
The test suite covers the full user purchase flow on DemoBlaze.

🔹 1. User Sign-Up
✅ Navigate to the website

✅ Click on "Sign Up"

✅ Enter unique username & password (using faker)

✅ Handle alert and verify success

🔹 2. User Login
✅ Click on "Login"

✅ Enter registered credentials

✅ Verify user login is successful

✅ Assert the login alert message

🔹 3. Browse and Select Product
✅ View list of products on the homepage

✅ Click on a product

✅ Validate product title and price

✅ Log product details to console

🔹 4. Add Product to Cart
✅ Click "Add to cart"

✅ Handle confirmation alert

✅ Navigate to Cart and verify product presence

🔹 5. Place Order
✅ Click "Place Order"

✅ Enter name, country, city, card, month, and year (faker-generated)

✅ Submit order

🔹 6. Verify Purchase
✅ Capture and log confirmation message

✅ Extract and print purchase ID and amount

🧪 Sample Assertions Used
Page title and alerts validation

Element visibility

Console logs

Alert handling

JSON data for dynamic user input

🔐 Authorization
No auth required for UI flow. For future API support, consider token-based auth integration.

💡 Jenkins Compatibility
Make sure Jenkins agent has:

Node.js and npm in path

Workspace access

Batch command to run:

bash
Copy
Edit
npx playwright test tests/Flow_Test.spec.js --project=chromium
🔧 Helpful Commands
bash
Copy
Edit
npx playwright install        # Install browser binaries
npx playwright test           # Run tests
npx playwright show-report    # Show HTML report
npx playwright codegen        # Record user actions (if needed)
📌 Author
Author: Tejas Jayendra Aware

GitHub: TEJAS8007

Project: DemoBlaze_Playwright_Automation_Framework

