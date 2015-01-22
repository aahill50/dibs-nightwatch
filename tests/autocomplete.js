module.exports = {
    "Autocomplete test 1" : function (browser) {
        var searchBar = 'input[name=q]';
        var searchList = 'ul#ui-id-1';
        var searchTerm = 'gold';

        browser
            .url("http://1stdibs.com")
            .waitForElementVisible('body', 1000)
            .setValue(searchBar, searchTerm)
            .waitForElementVisible(searchList, 1000)
            .assert.containsText(searchList, 'POPULAR SEARCHES')
            .assert.containsText(searchList, 'DEALERS')
            .assert.containsText(searchList, searchTerm)
            .end();
    }
};

