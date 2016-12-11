exports.command = function(username, password){
  var browser = this;
  browser
    .url('https://github.com')
    .click('body > header > div > div > div > a.btn.site-header-actions-btn.mr-1')
    .waitForElementVisible('#login_field')
    .setValue('#login_field', username)
    .setValue('#password', password)
    .click('input.btn')
    .waitForElementVisible('img.avatar')
  return this;
};
