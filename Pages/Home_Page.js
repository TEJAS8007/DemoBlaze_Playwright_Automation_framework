           /**
 * @author          Tejas Jayendra Aware
 * @applicationURL  https://www.demoblaze.com/index.html
 * @description     [Home Page Object Containing Actions Associated with Home Page.]
 * @createdOn       [04-June-2025]
 * @lastModifiedBy  Tejas Jayendra Aware
 */ 
           const{test,expect}=require('@playwright/test')
            const utils=require('../Utilities/Utils')
            const log=require('../Utilities/logger');
            const data=require('../Utilities/Data.json');
            export class Home_page {

                constructor(page){
                    this.page=page;

                    this.product_Name="div[class='card-block'] h4 a";
                    this.product_Price="div[class='card-block'] h5";
                    this.product="//a[text()='Samsung galaxy s6']";
                }

                async verify_HomePage_Title(){

                        const title= await this.page.title();
                        console.log("Title Home_Page : "+title);

                        try {
                            await expect(this.page).toHaveTitle(data.title);
                            log.info('Home Title Passed Succesfully...');
                        } catch(error) {
                        log.error('Home Title not Passed Succesfully...');
                        }
                    }

                    async verify_HomePage_Url(){
                        const url= await this.page.url();
                        console.log("Url Home_Page : "+url);

                        try {
                        await expect(this.page).toHaveURL(data.login_url);
                        log.info('Home url Passed Succesfully...');
                   } catch(error) {
                    log.error('Home url not Passed Succesfully...');
                }
                    }

                    async  verify_Product_Name() {

                        await utils.waitForLcators(this.page,this.product_Name);
                        const names= await this.page.locator(this.product_Name);

                        try {
                            await expect(this.page.locator(this.product_Name)).toHaveCount(9);
                            log.info('Product Count Validated Successfully...');
                        } catch (error) {
                            log.error('Product count not validated Successfully....');
                        }
                        const count=await names.count();
                        console.log(count);
                        for(let a=0;a<count;a++) {
                            console.log(await names.nth(a).textContent());
                        }
                    }

                    async  verify_Product_Price() {

                        await utils.waitForLcators(this.page,this.product_Price);
                        const price= await this.page.locator(this.product_Price);

                         try {
                            await expect(this.page.locator(this.product_Price)).toHaveCount(9);
                            log.info('Product price Validated Successfully...');
                        } catch (error) {
                            log.error('Product price not validated Successfully....');
                        }

                        const count=await price.count();
                        console.log(count);
                        for(let a=0;a<count;a++) {
                            console.log(await price.nth(a).textContent());
                        }
                    }

                    async click_On_Product() {

                        await utils.waitForElement(this.page,this.product);
                        await this.page.locator(this.product).click();
                    }
            }

                module.exports = { Home_page };