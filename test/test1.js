module.exports = {
  'go to github index page': function(browser) {
    browser
      .url('www.google.com')
      .pause(10000)
      .waitForElementVisible('div')
      .end();
  }
};
