# 🧪 DemoBlaze Playwright Automation Framework

This project is a **hybrid Playwright test automation framework** built to test end-to-end scenarios of the [Demoblaze e-commerce site](https://www.demoblaze.com/index.html). The framework supports functionalities such as **user signup**, **login**, **viewing products**, **adding to cart**, and **checkout with payment** using modular and reusable code components.

---

## 🚀 Features

- ✅ End-to-End Test Flow
- 🧱 Page Object Model (POM) Design
- 🔁 Reusable Utility Methods (Waits, Alert Handling, etc.)
- 🔐 Dynamic User Generation using `@faker-js/faker`
- 📋 Custom Logging via `winston`
- 📹 Video Recording Support
- 📂 Clear Directory Structure
- 📊 HTML Reporting (via Playwright)

---

## 📂 Folder Structure

HybridFramework_Demoblaze/
├── tests/
│ └── Flow_Test.spec.js # Main end-to-end test
├── Pages/
│ ├── Login_Page.js
│ ├── Home_Page.js
│ ├── Product_Page.js
│ ├── Payment_Page.js
├── Utilities/
│ ├── Utils.js # wait, alert handlers
│ ├── Data.json # test data
│ ├── logger.js # winston logger setup
├── Videos/ # Video recordings of test runs
├── logs/
│ └── combined.log # Test execution logs
├── playwright.config.js # Playwright configuration
├── package.json
├── .gitignore

yaml
Copy
Edit

---

## 🛠️ Installation & Setup

1. **Clone the repository**  
```bash
git clone https://github.com/TEJAS8007/DemoBlaze_Playwright_Automation_framework.git
cd DemoBlaze_Playwright_Automation_framework
Install dependencies

bash
Copy
Edit
npm install
Run tests

bash
Copy
Edit
npx playwright test
View HTML report

bash
Copy
Edit
npx playwright show-report
📦 Tech Stack
Playwright

JavaScript (ES6)

Faker.js for random test data

Winston for logging

Node.js

✍️ Author Info
👨‍💻 Author: Tejas Jayendra Aware

🔗 GitHub: TEJAS8007

🛠 Created: June 2025

🌐 Application Under Test: Demoblaze

📌 Notes
Ensure you have a stable internet connection to access the Demoblaze site.

The framework currently uses a single end-to-end test file (Flow_Test.spec.js) to cover all flows for simplicity.

🤝 Contributions
Feel free to fork and contribute improvements!
