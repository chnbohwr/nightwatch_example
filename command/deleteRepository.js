exports.command = function (account, repositoryName) {
    var browser = this.page.github();
    var resName = account + '/' + repositoryName;
    browser
        .navigate()
        .click('span[title="' + resName + '"]')
        .waitForElementVisible('@rep_container')
        .click('@rep_setting')
        .waitForElementVisible('@setting_field_rename')
        .click('@setting_delete')
        .waitForElementVisible('@setting_modal')
        .setValue('@setting_modal_resname', repositoryName)
        .click('@setting_modal_del')
        .waitForElementVisible('@index_flashnotice')
    return this;
}
