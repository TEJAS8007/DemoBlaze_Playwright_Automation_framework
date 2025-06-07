 /**
 * @author          Tejas Jayendra Aware
 * @applicationURL  https://www.demoblaze.com/index.html
 * @description     [End to End Test Spec file Performing End To End Product Purchase.]
 * @createdOn       [04-June-2025]
 * @lastModifiedBy  Tejas Jayendra Aware
 */
        const{test,expect, chromium}=require('@playwright/test');
        const log=require('../Utilities/logger');
        const data=require('../Utilities/Data.json');
        import { Login_page } from '../Pages/Login_Page';
        import { Home_page } from '../Pages/Home_Page';
        import { Product_Page } from '../Pages/Product_Page';
        import { Payment_Page } from '../Pages/Payment_Page';
        import {faker} from '@faker-js/faker';

        let login,home,product,payment;

        let browser,context,page;
        let user_ID,user_Pass;
        let name,country,city,credit,month,year;

        test.beforeAll('Before_Test',async()=>{

            browser=await chromium.launch({headless:false});
            context=await browser.newContext({recordVideo: { dir : 'Videos/' } });
            page=await context.newPage();

            await page.goto(data.login_url, { waitUntil: 'domcontentloaded' });
            login=new Login_page(page);
            home=new Home_page(page);
            product=new Product_Page(page);
            payment=new Payment_Page(page);

            user_ID=faker.internet.username();
            user_Pass=faker.internet.password();
            name = faker.internet.userName();         
            country = faker.location.country();      
            city = faker.location.city();           
            credit = faker.finance.creditCardNumber(); 
            month = faker.date.month();            
            year = faker.date.future().getFullYear().toString(); 
            log.debug('------------Before All Started----------------------------');
            await page.context().tracing.start({screenshots:true,snapshots:true});
        })

          test.afterAll('After_Test',async()=> {
            await page.context().tracing.stop({path:'Demo_Blaze.zip'});
            await context.close();
            await page.close();
            log.debug('------------After All Ended--------------------------------');
        })   

    
            test('Login_Test',async({page})=>{
    
                
                log.info('Login______Test_______Started_____');
                // Login Page Execution Done
                await login.verify_Page_Title();
                await login.verify_Page_Url();
                await login.Register_User(user_ID,user_Pass); 
            
                log.info('Home______Test_______Started_____');
                //Home Page Execution Done
                await home.verify_HomePage_Title();
                await home.verify_HomePage_Url();
                await home.verify_Product_Name();
                await home.verify_Product_Price();
                await home.click_On_Product();

                log.info('Product______Test_______Started_____');
                //ProductPage Execution Done
                await product.verify_ProductPage_Title();
                await product.verify_ProductPage_Url();
                await product.verify_Product_Name();
                await product.verify_Product_Price();
                await product.verify_Product_Info();
                await product.click_Add_To_Cart();

                log.info('Payment______Test_______Started_____');
                // Payment Page Execution Done
                await payment.verify_PaymentPage_Title();
                await payment.verify_PaymentPage_Url();
                await payment.verify_Product_Name();
                await payment.verify_Product_Price();
                await payment.add_User_Info(
                    name,
                    country,
                    city,
                    credit,
                    month,
                    year
                );

               

            })

        
