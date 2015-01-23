"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

    module.exports = {
        before : function(browser) {
            browser.searchBar = 'input[name=q]';
            browser.searchList = 'ul#ui-id-1';
            browser.searchTerm = 'gold';
        },

        "Auto Complete - Enter Search Term" : function (browser) {
            browser
                .url("http://1stdibs.com")
                .waitForElementVisible('body', 1000)
                .setValue(browser.searchBar, browser.searchTerm)
                .waitForElementVisible(browser.searchList, 1000, function () {
                    browser.searchTerm.should.equal(browser.searchTerm);
                })
        },

        "Auto Complete - Validate Search Results" : function (browser) {
            browser
                .getText(browser.searchList, function (result) {
                    var searchResults = result.value;
                    //searchResults.should.contain('123');
                    searchResults.should.contain('POPULAR SEARCHES');
                    searchResults.should.contain('DEALERS');
                    searchResults.should.contain(browser.searchTerm);
                })
            .end();
    }
};

