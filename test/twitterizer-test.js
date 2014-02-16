var twitterizer = require("../index.js");
var chai = require("chai");
var should = chai.should();

describe('Twitterizer', function () {

    it('should prepare tweet', function () {
        var replaced = twitterizer('@goschevski web developer #goschevski - http://www.goschevski.com');
        replaced.should.equal('<a href="http://www.twitter.com/goschevski" target="_blank">@goschevski</a> web developer <a href="http://www.twitter.com/search?q=%23goschevski" target="_blank">#goschevski</a> - <a href="http://www.goschevski.com" target="_blank">http://www.goschevski.com</a>');
    });

    describe('replaceHashTags()', function () {
        it('should replace hash tags', function () {
            var replaced = twitterizer.replaceHashTags('#goschevski');
            replaced.should.equal('<a href="http://www.twitter.com/search?q=%23goschevski" target="_blank">#goschevski</a>');
        });
    });

    describe('replaceMentions()', function () {
        it('should replace mentions', function () {
            var replaced = twitterizer.replaceMentions('@goschevski');
            replaced.should.equal('<a href="http://www.twitter.com/goschevski" target="_blank">@goschevski</a>');
        });
    });

    describe('replaceUrls()', function () {
        it('should replace urls with http://', function () {
            var replaced = twitterizer.replaceUrls('http://www.goschevski.com');
            replaced.should.equal('<a href="http://www.goschevski.com" target="_blank">http://www.goschevski.com</a>');
        });
    });
});