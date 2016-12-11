exports.command = function(repositoryName){
    var browser = this.page.github();
    browser
        .navigate()
        .click('@index_create_button')
        .waitForElementVisible('@index_dropdown')
        .click('@index_dropdown_newrep')
        .waitForElementVisible('@newrep_field_name')
        .setValue('@newrep_field_name', repositoryName)
        .click('@newrep_field_submit')
        .waitForElementVisible('@rep_container')
    return this;
}
