module.exports = {
    "Autocomplete test" : function (browser) {
        var searchList = 'ul#ui-id-1';
        var searchTerm = 'gold';

        browser
            .url("http://1stdibs.com")
            .waitForElementVisible('body', 1000)
            .setValue('input[name=q]', 'gold')
            .waitForElementVisible(searchList, 1000)
            .assert.containsText(searchList, 'POPULAR SEARCHES')
            .assert.containsText(searchList, 'DEALERS')
            .assert.containsText(searchList, searchTerm)
            .end();
    }
};

