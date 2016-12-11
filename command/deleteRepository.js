exports.command = function (account, repositoryName) {
    var browser = this;
    var resName = account + '/' + repositoryName;
    browser
        .url('https://github.com')
        .click('span[title="' + resName + '"]')
        .waitForElementVisible('#js-repo-pjax-container')
        .click('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div:nth-child(2) > nav > a:nth-child(8)')
        .waitForElementVisible('#rename_field')
        .click('#options_bucket > div.boxed-group.dangerzone > div > button:nth-child(11)')
        .waitForElementVisible('#facebox')
        .setValue('#facebox > div > div > form > p > input', repositoryName)
        .click('#facebox > div > div > form > button')
        .waitForElementVisible('.flash-notice')
    return this;
}
