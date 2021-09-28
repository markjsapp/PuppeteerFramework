const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

class SearchActions {
    async openBrowser() {
        this.browser = await puppeteer.launch({headless: false });
        this.page = await this.browser.newPage('');
    }

    async closeBrowser() {
        this.browser = await puppeteer.close();
    }

    async login(){
        const loginButton = await this.page.$eval('//a[contains(text(), "Log In")]');
        await page.click(loginButton, {clickCount: 1 });
        const submitLoginButton = await this.page.$eval('//button[contains(text(),"Log In")]');
        await this.page.type('#loginUsername', 'testAccount11223344');
        await this.page.type('#loginPassword', '123fakestreet');
        await this.page.click(submitLoginButton, {clickCount: 1 });
        await page.waitForTimeout(3000)
    }

    async enterSearchText(){
        await this.page.type('#loginPassword', 'movies');
        await this.page.keyboard.press('Enter');
    }

    async validateSearchResults(){
        const subredditLink = await this.page.$eval('//div[contains(text(),"r/movies")]');
        expect(subredditLink).to.be.a('string','r/movies');
    }
}

setWorldConstructor(SearchActions)