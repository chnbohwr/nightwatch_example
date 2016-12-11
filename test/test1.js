var username = 'fastfood001';
var password = 'fastfood000';
var repositoryName = 'CVWEF324W33EFWE';
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
