const { setWorldConstructor} = require('@cucumber/cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

class SearchActions {
    async openBrowser() {
        this.browser = await puppeteer.launch({
            defaultViewport: null,
            headless: true,
            slowMo: 100,
            args: [`--window-size=1920,1080`], 
        });
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async homepage() {
        await this.page.goto("https://www.amazon.com/");
    }

    async enterSearchText(string){
        await this.page.type('#twotabsearchtextbox', string);
        await this.page.keyboard.press('Enter');
    }

    async validateSearchResults(string){
        await this.page.waitForSelector('h1');
        if (string == "Nintendo Switch"){
            expect('//span[contains(text(), "Nintendo Switch with Neon Blue")]').that.contains('Nintendo Switch');
        }
    }
}

setWorldConstructor(SearchActions)