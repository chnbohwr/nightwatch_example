exports.command = function(username, password){
  var browser = this.page.github();
  browser
    .navigate()
    .click('@index_login_btn')
    .waitForElementVisible('@login_field_username')
    .setValue('@login_field_username', username)
    .setValue('@login_field_password', password)
    .click('@login_field_submit')
    .waitForElementVisible('@index_avatar')
  return this;
};
