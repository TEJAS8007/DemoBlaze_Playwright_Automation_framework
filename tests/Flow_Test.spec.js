/**
 * @author          Tejas Jayendra Aware
 * @applicationURL  https://www.demoblaze.com/index.html
 * @description     [Flow_Test Containing Test calling page Objects...]
 * @createdOn       [04-June-2025]
 * @lastModifiedBy  Tejas Jayendra Aware
 */
const { test, expect, chromium } = require('@playwright/test');
const getLogger = require('../Utilities/logger'); // getLogger is a function now
const data = require('../Utilities/Data.json');
import fs from 'fs';
import { parse } from 'csv-parse/sync';

import { Login_page } from '../Pages/Login_Page';
import { Home_page } from '../Pages/Home_Page';
import { Product_Page } from '../Pages/Product_Page';
import { Payment_Page } from '../Pages/Payment_Page';
import { Laptops_Page } from '../Pages/Laptops_Page';
import {UI_Validation_Page} from '../Pages/UI_Validation_Page';

import { faker } from '@faker-js/faker';
import { Monittors_Page } from '../Pages/Monitors_Page';

    let login, home, product, payment, laptop,monitor,ui;
    let browser, context, page;
    let user_ID, user_Pass;
    let name, country, city, credit, month, year;

    let log;

    const csvData = fs.readFileSync('testData/users.csv');
        const records = parse(csvData, {
            columns: true,
            skip_empty_lines: true
    });

    test.beforeEach(async ({}, testInfo) => {

            const safeTitle = testInfo.title.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
            const logFile = `logs/${safeTitle}.log`;
            log = getLogger(logFile);

            browser = await chromium.launch({ headless: false });
            context = await browser.newContext({ recordVideo: { dir: 'Videos/' } });
            page = await context.newPage();
            await page.goto(data.login_url, { waitUntil: 'domcontentloaded' });
            await page.context().tracing.start({ screenshots: true, snapshots: true });

            // Page object initialization
            login = new Login_page(page,log);
            home = new Home_page(page,log);
            product = new Product_Page(page,log);
            payment = new Payment_Page(page,log);
            laptop = new Laptops_Page(page,log);
            monitor=new Monittors_Page(page,log);
            ui=new UI_Validation_Page(page,log);

            // Faker test data
            user_ID = faker.internet.username();
            user_Pass = faker.internet.password();
            name = faker.internet.username();
            country = faker.location.country();
            city = faker.location.city();
            credit = faker.finance.creditCardNumber();
            month = faker.date.month();
            year = faker.date.future().getFullYear().toString();

            log.debug('------------Before Each Started----------------------------');
    });


       test.afterEach(async () => {
           try {
                if (page?.context()) {
                    await page.context().tracing.stop({ path: 'Demo_Blaze.zip' });
                }
                } catch (err) {
                    log.warn('Tracing could not be stopped:', err.message);
            }

            if (context) {
                await context.close();
            }

            if (page) {
                await page.close();
            }

            if (log) {
                log.debug('------------After Each Ended------------------------------');
            }
        });
   
    test.describe.serial('Demo_Blaze Test Suite', () => {

        test('E2E_Test', async () => {
            
            log.info('Login______Test_______Started_____');
            await login.verify_Page_Title();
            await login.verify_Page_Url();
            await login.Register_User(user_ID, user_Pass);

            log.info('Home______Test_______Started_____');
            await home.verify_HomePage_Title();
            await home.verify_HomePage_Url();
            await home.verify_Product_Name();
            await home.verify_Product_Price();
            await home.click_On_Product();

            log.info('Product______Test_______Started_____');
            await product.verify_ProductPage_Title();
            await product.verify_ProductPage_Url();
            await product.verify_Product_Name();
            await product.verify_Product_Price();
            await product.verify_Product_Info();
            await product.click_Add_To_Cart();

            log.info('Payment______Test_______Started_____');
            await payment.verify_PaymentPage_Title();
            await payment.verify_PaymentPage_Url();
            await payment.verify_Product_Name();
            await payment.verify_Product_Price();
            await payment.add_User_Info(name, country, city, credit, month, year);
        });

        test('Laptop_Page_Validation', async () => {

            //await page.goto(data.Laptop, { waitUntil: 'domcontentloaded' });
            log.info('Laptop Page Validation Test Started...');
            await laptop.verify_Title(data.title);
            await laptop.Click_on_Laptop();
            
            await laptop.verify_Product_Name();
            await laptop.verify_Product_Price();
            log.info('Laptop test Completed Successfully......');
        });

        test('Monitors_Page_Validation', async () => {

            //await page.goto(data.Laptop, { waitUntil: 'domcontentloaded' });
            log.info('Monitor Page Validation Test Started...');
            await monitor.verify_Title(data.title);
            await monitor.Click_on_Monitors();
            
            await monitor.verify_Product_Name();
            await monitor.verify_Product_Price();
            log.info('Monitor test Completed Successfully......');
        });
 
    });   


    // Second Test Suite — Data-Driven Login
    test.describe.serial('Data-Driven Login Test', () => {

            for (const record of records) {

                test(`Login test for username: ${record.username}`, async () => {

                log.info(`Attempting login for user: ${record.username}`);
                await login.login_With_Credentials(record.username, record.password);
                
            });
        }
    });

    test.describe.serial('UI_Valdation_Test',async ()=> {

        test('UI_Validation_Test',async ()=>{

            log.info('UI Validation test Started....');
            await ui.verify_Page_Title(data.title);
            await ui.verify_Page_url(data.login_url);
            await ui.verify_Page_Logo();
            await ui.verify_Page_Navigation_links();
            await ui.verify_Page_Categories_links();
            await ui.verify_About_Us();
            await ui.Verify_Get_In_Touch();
            await ui.Verify_Footer_Logo();
            log.info('UI Validation test Ended....');
        });
    });