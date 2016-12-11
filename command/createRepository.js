exports.command = function(repositoryName){
    var browser = this;
    browser
        .url('https://github.com')
        .click('.header-nav-link.tooltipped.tooltipped-s.js-menu-target')
        .waitForElementVisible('.dropdown-menu.dropdown-menu-sw')
        .click('.dropdown-item:first-child')
        .waitForElementVisible('#repository_name')
        .setValue('#repository_name', repositoryName)
        .click('.btn.btn-primary.first-in-line')
        .waitForElementVisible('.pagehead-actions')
    return this;
}
