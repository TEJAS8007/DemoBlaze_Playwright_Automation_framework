/**
 * @author          Tejas Jayendra Aware
 * @applicationURL  https://www.demoblaze.com/index.html
 * @description     [Product Page Object Containing Actions Associated with Product Page.]
 * @createdOn       [04-June-2025]
 * @lastModifiedBy  Tejas Jayendra Aware
 */ 
const{test,expect}=require('@playwright/test');
const utils=require('../Utilities/Utils');
const data=require('../Utilities/Data.json');
const log=require('../Utilities/logger');
export class Product_Page {

    constructor(page){
        this.page=page;

        this.product_Name="//h2[text()='Samsung galaxy s6']";
        this.product_Price="h3.price-container";
        this.product_Info="div[id='more-information'] p";
        this.add_Cart="//a[text()='Add to cart']";
        this.cart_Button="//a[text()='Cart']";

    }

    async verify_ProductPage_Title(){
        const title= await this.page.title();
        console.log("Title Product_Page : "+title);

        try {
                await expect(this.page).toHaveTitle(data.title);
                log.info('Product Title Passed Succesfully...');
            } catch(error) {
            log.error('Product Title not Passed Succesfully...');
            }
    }

    async verify_ProductPage_Url(){
        const url= await this.page.url();
        console.log("Url Product_Page : "+url);

            try {
            await expect(this.page).toHaveURL(data.product_url);
            log.info('product url Passed Succesfully...');
        } catch(error) {
        log.error('product url not Passed Succesfully...');
        }
    }

    async verify_Product_Name() {
        
        await utils.waitForLcators(this.page,this.product_Name);
        const name= await this.page.locator(this.product_Name);
        try {
            await expect(this.page.locator(this.product_Name)).toHaveText(data.product_Name);
            log.info('Product Name Validation Succesfull....');
        } catch (error) {
            log.error('product Name validation not succesfull....');
        }

        const names= await name.textContent();
        console.log("Product Name : "+names);
    } 

    async verify_Product_Price() {

        await utils.waitForLcators(this.page,this.product_Price);
        const price= await this.page.locator(this.product_Price);
        try {
            await expect(this.page.locator(this.product_Price)).toHaveText(data.product_page_price);
            log.info('Product price Validation Succesfull....');
        } catch (error) {
            log.error('product price validation not succesfull....');
        }

        const prices= await price.textContent();
        console.log("Product Price : "+prices);
    } 

    async verify_Product_Info() {

        await utils.waitForLcators(this.page,this.product_Price);
        const info= await this.page.locator(this.product_Info);
        try {
            await expect(this.page.locator(this.product_Info)).toBeVisible();
            log.info('Product Info Validation sucesfull...');
        } catch (error) {
            log.error('Product Info Validation not succesfull....');
        }
        const infos= await info.textContent();
        console.log("Product Info : "+infos);
    } 

    async click_Add_To_Cart() {
        await this.page.waitForTimeout(2000);
        await utils.waitForElement(this.page,this.add_Cart);
        await this.page.locator(this.add_Cart).click();

        // await this.page.waitForTimeout(2000);
        // await utils.handleAlert();

        await utils.waitForElement(this.page,this.cart_Button);
        await this.page.locator(this.cart_Button).click();
        await this.page.waitForTimeout(1000);
    }
}

module.exports = { Product_Page };