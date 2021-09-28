const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

Before(async function() {
    return await this.openBrowser();
});

After(async function() {
    return await this.closeBrowser();
})

Given("Mark is on the home page", async function() {
    return await this.homepage();
})

When ("Mark selects the Log In button", async function() {
    return await this.selectLogin();
})

When("enters his user credentials", async function() {
    return await this.enterCredentials();
}) 

Then("the home page should be displayed", async function() {
    return await this.validateHomepageText();
}) 

Then("the his username should be displayed in the top right", async function() {
    return await this.validateUsername();
})