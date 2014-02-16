var base = 'http://www.twitter.com/',
    hash = base + 'search?q=%23';

var replaceHashTags = function (str) {
    var regex = /#([A-Za-z0-9-_]+)/g;
    return str.replace(regex, '<a href="'+ hash +'$1" target="_blank">#$1</a>');
};

var replaceMentions = function (str) {
    var regex = /@([A-Za-z0-9_]{1,30})/g;
    return str.replace(regex, '<a href="'+ base +'$1" target="_blank">@$1</a>')
};

var replaceUrls = function (str) {
    var protocolPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
        wwwPattern = /(\b(www):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    return str.replace(protocolPattern, '<a href="$1" target="_blank">$1</a>');
};

module.exports = function (str) {
    var text = str;
    text = replaceUrls(text);
    text = replaceHashTags(text);
    text = replaceMentions(text);
    return text;
};

module.exports.replaceHashTags = replaceHashTags;
module.exports.replaceMentions = replaceMentions;
module.exports.replaceUrls = replaceUrls;