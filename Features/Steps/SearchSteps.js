const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

Before(async function() {
    return await this.openBrowser();
});

After(async function() {
    return await this.closeBrowser();
});

Given("Mark is on the Amazon homepage", async function() {
    return await this.homepage();
});

When('Mark searches for {string}', async function (string) {
    return await this.enterSearchText(string);
});

Then('{string} should be displayed in the results', async function (string) {
    return await this.validateSearchResults(string);
});

Then('And the item\'s stock photo should also be displayed', async function(){
    return await this.validateSearchImage();
});