const { text, expect } =require('playwright/test');
import data from '../Utilities/Data.json';
export class  UI_Validation_Page {
    
    constructor(page,log) {
        this.page=page;
        this.log=log;
        this.logo="a#nava";
        this.Navigation_Links="//ul[@class='navbar-nav ml-auto']/li/a";
        this.categories="[class='list-group'] a";
        this.About_Us="//*[@id='fotcont']/div[1]";
        this.Get_Touch="//*[@id='fotcont']/div[2]";
        this.footer_Logo="//*[@id='fotcont']/div[3]";
    }


    async verify_Page_Title(title) {
        try {
            await expect(this.page).toHaveTitle(title);
            this.log.info('Page title Verified  Succesfully...');
        } catch(error) {
            this.log.error('Page titile not verified Succesfully...')
        }
    }

    async verify_Page_url(url) {
        try {
            await expect(this.page).toHaveURL(url);
            this.log.info('Page url Verified  Succesfully...');
        } catch(error) {
            this.log.error('Page url not verified Succesfully...')
        }
    }

    async verify_Page_Logo() {
        try {
            await expect(this.page.locator(this.logo)).toBeVisible();
            this.log.info('Page Logo  Verified  Succesfully...');
        } catch(error) {
            this.log.error('Page Logo not verified Succesfully...')
        }
    }

    async verify_Page_Navigation_links() {
       
        try {
            await expect(this.page.locator(this.Navigation_Links)).toHaveCount(8);
            this.log.info('Page Navigation Links Verified  Succesfully...');
        } catch(error) {
            this.log.error('Page Navigation Links not verified Succesfully...')
        }
    }

    async verify_Page_Categories_links() {

        try {
            await expect(this.page.locator(this.categories)).toHaveCount(4);
            this.log.info('Page Categories Links Verified  Succesfully...');
        } catch(error) {
            this.log.error('Page Categories Links not verified Succesfully...')
        }
    }

    async verify_About_Us() {

        const about= await this.page.locator(this.About_Us);
        console.log(await about.textContent());

        try {
            await expect(this.page.locator(this.About_Us)).toBeVisible();
            this.log.info('About us Verified Succesfully....');
        } catch(error) {
            this.log.error('About us not verified Successfully..');
        }
    }

    async Verify_Get_In_Touch() {

        const about= await this.page.locator(this.Get_Touch);
        console.log(await about.textContent());

        try {
            await expect(this.page.locator(this.Get_Touch)).toBeVisible();
            this.log.info('GetIn Touch Verified Succesfully....');
        } catch(error) {
            this.log.error('GetIn Touch not verified Successfully..');
        }
    }

    async Verify_Footer_Logo() {

        try {
            await expect(this.page.locator(this.footer_Logo)).toBeVisible();
            this.log.info('Footer Logo Verified Succesfully....');
        } catch(error) {
            this.log.error('Footer Logo not verified Successfully..');
        }
    }
}

module.exports={UI_Validation_Page};