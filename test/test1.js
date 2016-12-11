var randomstring = require("randomstring");
var username = 'fastfood001';
var password = 'fastfood000';
var repositoryName = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});

module.exports = {
  'go to github index page': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .login(username, password)
      .createRepository(repositoryName)
      .deleteRepository(username, repositoryName)
      .end()
  }
};
