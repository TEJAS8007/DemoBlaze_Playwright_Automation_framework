/**
 * @author          Tejas Jayendra Aware
 * @applicationURL  https://www.demoblaze.com/index.html
 * @description     [Payment Page Object Containing Actions Associated with Payment Page.]
 * @createdOn       [04-June-2025]
 * @lastModifiedBy  Tejas Jayendra Aware
 */
      const{test,expect}=require('@playwright/test');
        const utils=require('../Utilities/Utils');
        const data=require('../Utilities/Data.json');
        const log=require('../Utilities/logger');   
        export class Payment_Page {

            constructor(page){
                this.page=page;

                this.product_Name="//td[text()='Samsung galaxy s6']";
                this.product_Price="//td[text()='360']";
                this.Place_Order="//button[text()='Place Order']";

                this.user_name="#name";
                this.country="#country";
                this.city="#city";
                this.credi_card="#card";
                this.month="#month";
                this.year="#year";
                this.purchase="//button[text()='Purchase']";

            }

        async verify_PaymentPage_Title(){
            await this.page.waitForTimeout(3000);
            const title= await this.page.title();
            console.log("Title Payment_Page : "+title);

                try {
                  await expect(this.page).toHaveTitle(data.title);
                  log.info('Payment Title Passed Succesfully...');
                } catch(error) {
                  log.error('Payement Title not Passed Succesfully...');
                }
        }

        async verify_PaymentPage_Url(){
            const url= await this.page.url();
            console.log("Url Payment_Page : "+url);

                try {
                  await expect(this.page).toHaveURL(data.payment_url);
                  log.info('Payment Url Passed Succesfully...');
                } catch(error) {
                  log.error('Payement url not Passed Succesfully...');
                }
        }

        async verify_Product_Name() {
        
        await utils.waitForLcators(this.page,this.product_Name);
        const name= await this.page.locator(this.product_Name);
        try {
              await expect(this.page.locator(this.product_Name)).toHaveText(data.product_Name);
              log.info('Payemnt Product Name Validation Succesfull....');
            } catch (error) {
              log.error('Payemnt product Name validation not succesfull....');
            }

        const names= await name.textContent();
        console.log("Product Name : "+names);
    } 

        async verify_Product_Price() {

        await utils.waitForLcators(this.page,this.product_Price);    
        const price= await this.page.locator(this.product_Price);
        try {
              await expect(this.page.locator(this.product_Price)).toHaveText(data.payment_product_price);
              log.info('Payemnt Product Price Validation Succesfull....');
            } catch (error) {
              log.error('Payemnt Product Price validation not succesfull....');
            }

        const prices= await price.textContent();
        console.log("Product Price : "+prices);

        await utils.waitForElement(this.page,this.Place_Order);
        await this.page.locator(this.Place_Order).click();
    } 


    async add_User_Info(na,co,ci,cr,mo,ye) {
        
        await utils.waitForLcators(this.page,this.user_name);
        await this.page.locator(this.user_name).fill(na);
        try {
              await expect(this.page.locator(this.user_name)).toHaveValue(na);
              log.info('Payment name passed successfully...');
            } catch(error) {
              log.error('Payment name not passed...');
            }

        await utils.waitForLcators(this.page,this.country);
        await this.page.locator(this.country).fill(co);
        try {
              await expect(this.page.locator(this.country)).toHaveValue(co);
              log.info('Payment country passed successfully...');
            } catch(error) {
              log.error('Payment country not passed...');
            }

        await utils.waitForLcators(this.page,this.city);
        await this.page.locator(this.city).fill(ci);
        try {
              await expect(this.page.locator(this.city)).toHaveValue(ci);
              log.info('Payment city passed successfully...');
            } catch(error) {
              log.error('Payment city not passed...');
            }

        await utils.waitForLcators(this.page,this.credi_card);
        await this.page.locator(this.credi_card).fill(cr);
        try {
              await expect(this.page.locator(this.credi_card)).toHaveValue(cr);
              log.info('Payment CreditCard passed successfully...');
            } catch(error) {
              log.error('Payment CreditCard not passed...');
            }

        await utils.waitForLcators(this.page,this.month);
        await this.page.locator(this.month).fill(mo);
        try {
              await expect(this.page.locator(this.month)).toHaveValue(mo);
              log.info('Payment Month passed successfully...');
            } catch(error) {
              log.error('Payment Month not passed...');
            }

        await utils.waitForLcators(this.page,this.year);
        await this.page.locator(this.year).fill(ye);
        try {
              await expect(this.page.locator(this.year)).toHaveValue(ye);
              log.info('Payment Year passed successfully...');
            } catch(error) {
              log.error('Payment Year not passed...');
            }

        await utils.waitForElement(this.page,this.purchase);
        await this.page.locator(this.purchase).click();
        
    }
}          

  module.exports = { Payment_Page };