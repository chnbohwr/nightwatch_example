exports.command = function(username, password){
var self = this;
  var browser = this.page.github();
  browser
    .navigate()
    .click('@index_login_btn')
    .waitForElementVisible('@login_field_username')
    .setValue('@login_field_username', username)
    .setValue('@login_field_password', password, function(e){
        console.log(e);
        self.saveScreenshot('./screenshots/qqq.png')
    })

    .click('@login_field_submit')
    .waitForElementVisible('@index_avatar')
  return this;
};
