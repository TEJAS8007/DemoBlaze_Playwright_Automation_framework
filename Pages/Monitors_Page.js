const utils=require('../Utilities/Utils');
const {test,expect}=require('@playwright/test');
 class Monittors_Page {

    constructor(page,log) {

        this.page=page;
        this.log=log;
        this.laptop="//a[text()='Monitors']";
        this.product_Name="a.hrefch";
        this.product_Price="//div[@class='card-block']/h5";
        
    }

    async verify_Title(title) {
        try {
            await expect(this.page).toHaveTitle(title);
            this.log.info('Title verified Successfully.....');
        } catch(error) {
            this.log.error('Title not verified Successfully.....');
        }
    }

    async Click_on_Monitors() {
            await utils.waitForElement(this.page,this.laptop); 
            await this.page.locator(this.laptop).click();
            await this.page.waitForTimeout(4000);
    }


    async  verify_Product_Name() {

            await utils.waitForLcators(this.page,this.product_Name,4000);
            const names= await this.page.locator(this.product_Name);
            
            try {
                await expect (this.page.locator(this.product_Name)).toHaveCount(2);
                this.log.info('Monitors Count Validated Successfully...');
            } catch (error) {
                this.log.error('Monitors count not validated Successfully....');
            }
            
            const count=await names.count();
            for(let a=0;a<count;a++) {

                const text= await names.nth(a).textContent();
                console.log(text);
            }

        }

    async  verify_Product_Price() {

            await utils.waitForLcators(this.page,this.product_Price,4000);
            const price= await this.page.locator(this.product_Price);

                try {
                await expect(this.page.locator(this.product_Price)).toHaveCount(2);
                this.log.info('Monitors price Validated Successfully...');
            } catch (error) {
                this.log.error('Monitors price not validated Successfully....');
            }

            const count=await price.count();
            console.log(count);
            for(let a=0;a<count;a++) {
                console.log(await price.nth(a).textContent());
            }
        }    
}

module.exports={Monittors_Page}