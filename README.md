# 🧪 Demoblaze Automation Framework

This is an end-to-end hybrid automation testing framework built using **Playwright** for the [Demoblaze](https://www.demoblaze.com/index.html) website.

---

## 📂 Folder Structure

DEMO_BLAZE/
│
├── Pages/ # Page Object Model (POM) files for each page
│ ├── Home_Page.js
│ ├── Laptops_Page.js
│ ├── Login_Page.js
│ ├── Monitors_Page.js
│ ├── Payment_Page.js
│ ├── Product_Page.js
│ └── UI_Validation_Page.js
│
├── tests/ # Test scripts
│ └── Flow_Test.spec.js # Main test flow (Signup → Login → View Product → Add to Cart → Checkout → Payment)
│
├── Utilities/ # Reusable utility functions (e.g., wait, alert handling)
│
├── testData/ # Test data files (e.g., .env, CSVs, etc.)
│
├── test-results/ # Stores Playwright test output
├── playwright-report/ # Auto-generated HTML test reports
├── logs/ # Log files (if any)
├── node_modules/ # Project dependencies
├── Videos/ # Playwright video recordings (optional)
│
├── .gitignore # Git ignored files
├── Demo_Blaze.zip # Zipped version of the framework (for submission/upload)
├── package.json # NPM package config
├── package-lock.json # NPM package lock file
├── playwright.config.js # Playwright configuration file
├── README.md # Project documentation
└── Requirements.md # List of prerequisites or tools needed

yaml
Copy
Edit

---

## 🚀 Features

- Page Object Model (POM) design
- Flow-based test covering:
  - User Signup
  - User Login
  - Viewing Products
  - Adding Product to Cart
  - Checkout and Payment
- UI element validation
- Functional validations
- Test data separation
- Utility methods for reusability
- HTML Report generation
- Video recording support

---

## ✅ Prerequisites

- Node.js (v16+ recommended)
- npm
- Playwright

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate to the project
cd DEMO_BLAZE

# 3. Install dependencies
npm install

# 4. Install Playwright browsers (if not already done)
npx playwright install
▶️ Running Tests
bash
Copy
Edit
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/Flow_Test.spec.js
📄 Reports & Recordings
After test execution:

View HTML report: npx playwright show-report

Recordings (if enabled): Available under /Videos

Logs: Check /logs (if implemented)

🛠 Utilities
Reusable helper functions like:

Wait for element

Alert handling

Common selectors

These are located in the /Utilities folder.

📂 Test Data
Sensitive or test data can be stored in:

.env file (for credentials)

.csv or .json under testData/

👨‍💻 Author
Tejas Jayendra Aware
Automation Test Engineer | Playwright | Java | Selenium
