    /**
 * @author          Tejas Jayendra Aware
 * @applicationURL  https://www.demoblaze.com/index.html
 * @description     [Login Page Object Containing Actions Associated with Login.]
 * @createdOn       [04-June-2025]
 * @lastModifiedBy  Tejas Jayendra Aware
 */

    const{test,expect}=require('@playwright/test')
    const utils=require('../Utilities/Utils')
    const log=require('../Utilities/logger');
    const data=require('../Utilities/Data.json');

    export class Login_page {

        constructor(page,log) {
            this.page=page;
            this.log=log;
            // Signup Locators
            this.sign_UP_="a#signin2";
            this.sign_UP_UN="input#sign-username";
            this.sign_UP_PS="input#sign-password";
            this.sign_UP_Button="button[onclick='register()']";

            // Login Locators
            this.Login_="#login2";
            this.login_UP_UN="#loginusername";
            this.login_UP_PS="#loginpassword";
            this.login_UP_Button="button[onclick='logIn()']";
        }

        async verify_Page_Title(){
            const title= await this.page.title();
            console.log("Title Login_Page : "+title);

            try {
                await expect(this.page).toHaveTitle(data.title);
                this.log.info('Login Title Passed Succesfully...');
            } catch(error) {
                this.log.error('Login Title not Passed Succesfully...');
            }
        }

        async verify_Page_Url(){
            const url= await this.page.url();
            console.log("Url Login_Page : "+url);

            try {
                await expect(this.page).toHaveURL(data.login_url);
                this.log.info('Login Url Passed Succesfully...');
            } catch(error) {
                this.log.error('Login Url not Passed Succesfully...');
            }
        }

        async Register_User(uname,pass){
        
            // Signup Action
            await utils.waitForElement(this.page,this.sign_UP_); 
            await this.page.locator(this.sign_UP_).click();
            this.log.info('Click_On_SignUp_Done');

            await this.page.waitForTimeout(1000);
            await this.page.locator(this.sign_UP_UN).fill(uname);
            try {
                await expect(this.page.locator(this.sign_UP_UN)).toHaveValue(uname);
                this.log.info('SignUp Username passed successfully...');
            } catch(error) {
                this.log.error('SignUp username not passed...')
            }

            await this.page.locator(this.sign_UP_PS).fill(pass);
            try {
                await expect(this.page.locator(this.sign_UP_PS)).toHaveValue(pass);
                this.log.info('SignUp password passed successfully...');
            } catch(error) {
                this.log.error('SignUp password not passed...')
            }

            await utils.waitForElement(this.page,this.sign_UP_Button);
            await this.page.waitForTimeout(2000); 
            await this.page.locator(this.sign_UP_Button).click();
            await this.page.waitForTimeout(2000);
            
            //Handling alert
            await utils.handleAlert(this.page);

            await this.page.waitForTimeout(1000);
            // Login Action
            await utils.waitForElement(this.page,this.Login_); 
            await this.page.locator(this.Login_).click();

            await this.page.locator(this.login_UP_UN).fill(uname);
             try {
                await expect(this.page.locator(this.login_UP_UN)).toHaveValue(uname);
                this.log.info('Login Username passed successfully...');
            } catch(error) {
                this.log.error('Login username not passed...')
            }

            await this.page.locator(this.login_UP_PS).fill(pass);
            try {
                await expect(this.page.locator(this.login_UP_PS)).toHaveValue(pass);
                this.log.info('login password passed successfully...');
            } catch(error) {
                this.log.error('login password not passed...')
            }

            await utils.waitForElement(this.page,this.login_UP_Button); 
            await this.page.locator(this.login_UP_Button).click();

            await this.page.waitForTimeout(2000);
            await utils.handleAlert(this.page);
            await this.page.waitForTimeout(2000);
        }

         async login_With_Credentials(username, password) {
            
            await this.page.locator(this.Login_).click();
            await this.page.locator(this.login_UP_UN).fill(username);
            try {
                await expect(this.page.locator(this.login_UP_UN)).toHaveValue(username);
                this.log.info(`login username for ${username} passed`);
            } catch(error) {
                this.log.error(`login username for ${username} not passed`);
            }
            await this.page.locator(this.login_UP_PS).fill(password);
            try {
                await expect(this.page.locator(this.login_UP_PS)).toHaveValue(password);
                this.log.info(`login password for ${username} passed`);
            } catch(error) {
                this.log.error(`login password for ${username} not passed`);
            }
            await this.page.locator(this.login_UP_Button).click();

            await this.page.waitForTimeout(2000); 

        }
        

    }

    module.exports = { Login_page };