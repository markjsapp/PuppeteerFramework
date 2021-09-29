const { setWorldConstructor } = require('@cucumber/cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

class LoginActions {
    async homepage() {
        await this.page.goto("http://reddit.com");
    }

    async selectLogin() {
        const loginButton = await this.page.$eval('//a[contains(text(), "Log In")]');
        await page.click(loginButton, {clickCount: 1 });
    }

    async enterCredentials() {
        const submitLoginButton = await this.page.$eval('//button[contains(text(),"Log In")]')
        await this.page.type('#loginUsername', 'testAccount11223344');
        await this.page.type('#loginPassword', '############');
        await this.page.click(submitLoginButton, {clickCount: 1 });
        await page.waitForSelector('#post-composer-du-media')
    }

    async validateHomePageText() {
        const xpath = await this.page.$eval('//h1[contains(text(),"Home")]');
        const homePageText = await page.$eval(xpath, element => element.textContent);
        expect(homePageText).to.be.a('string','Home');
    }

    async validateUsername() {
        const username = await this.page.$eval('//span[contains(text(), "testAccount11223344")]');
        expect(username).to.be.a('string', 'testAccount11223344');
    }
}

setWorldConstructor(LoginActions)