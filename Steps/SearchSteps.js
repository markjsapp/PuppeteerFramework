const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

Before(async function() {
    return await this.openBrowser();
});

After(async function() {
    return await this.closeBrowser();
})

Given("Mark is on the Reddit homepage", async function() {
    return await this.homepage();
})

Given("Mark is logged in", async function() {
    return await this.login();
})

When("Mark searches for 'movies'", async function() {
    return await this.enterSearchText();
})

Then("/r/movies should be displayed in the results as a subreddit", async function() {
    return await this.validateSearchResults();
})