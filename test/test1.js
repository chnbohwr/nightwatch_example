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
      .pause(5000)
      .click('.header-nav-link.tooltipped.tooltipped-s.js-menu-target')
      .pause(500)
      .click('.dropdown-item:first-child')
      .pause(1000)
      .setValue('#repository_name'. 'test_repository')
      .click('.btn.btn-primary.first-in-line')
      .end();
  }
};
