module.exports = {
  'go to github index page': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .url('https://github.com/')
      .click('.btn.site-header-actions-btn.mr-1')
      .pause(1000)
      .setValue('input#login_field', 'fastfood001')
      .setValue('input#password', 'fastfood000')
      .click('input.btn')
      .pause(3000)
      .click('.header-nav-link.tooltipped.tooltipped-s.js-menu-target')
      .pause(500)
      .click('.dropdown-item:first-child')
      .pause(1000)
      .setValue('#repository_name', 'test_repository')
      .click('.btn.btn-primary.first-in-line')
      .pause(3000)
      .click('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div:nth-child(2) > nav > a:nth-child(8)')
      .pause(3000)
      .click('#options_bucket > div.boxed-group.dangerzone > div > button:nth-child(11)')
      .pause(1000)
      .setValue('#facebox > div > div > form > p > input', 'test_repository')
      .click('#facebox > div > div > form > button')
      .pause(5000)
      .end();

  }
};
