module.exports = {
  beforeEach: function(browser) {
    browser.resizeWindow(1920, 1080);
  },
  'go to github index page': function(browser) {
    browser
      .url('https://github.com/')
      .waitForElementVisible('.header-logo-invertocat')
      .end();
  }
};
