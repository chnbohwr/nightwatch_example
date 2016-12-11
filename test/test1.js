module.exports = {
  'go to github index page': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .url('https://github.com/')
      .click('.btn.site-header-actions-btn.mr-1')
      .waitForElementVisible('#login_field')
      .setValue('#login_field', 'fastfood001')
      .setValue('#password', 'fastfood000')
      .click('input.btn')
      .waitForElementVisible('img.avatar')
      .click('.header-nav-link.tooltipped.tooltipped-s.js-menu-target')
      .waitForElementVisible('.dropdown-menu.dropdown-menu-sw')
      .click('.dropdown-item:first-child')
      .waitForElementVisible('#repository_name')
      .setValue('#repository_name', 'test_repository')
      .click('.btn.btn-primary.first-in-line')
      .waitForElementVisible('.pagehead-actions')
      .click('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div:nth-child(2) > nav > a:nth-child(8)')
      .waitForElementVisible('#rename_field')
      .click('#options_bucket > div.boxed-group.dangerzone > div > button:nth-child(11)')
      .waitForElementVisible('#facebox')
      .setValue('#facebox > div > div > form > p > input', 'test_repository')
      .click('#facebox > div > div > form > button')
      .waitForElementVisible('.flash-notice')
      .end();
  }
};
