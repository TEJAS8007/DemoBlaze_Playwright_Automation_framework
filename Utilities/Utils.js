

exports.waitForElement = async (page, locator) => {
    await page.waitForSelector(locator, { state: 'visible', timeout: 5000 });
};

exports.handleAlert = async (page) => {
    page.on('dialog', async (dialog) => {
        console.log("Alert message: " + dialog.message());
        await dialog.accept();
    });
};

exports.waitForLcators = async (page, selector, timeout = 5000) => {
    try {
        await page.waitForSelector(selector, { state: 'visible', timeout });
        console.log(`✅ Element '${selector}' is visible.`);
    } catch (error) {
        console.error(`❌ Timeout waiting for selector '${selector}'`);
        throw error;
    }
};