# Twitterizer

Twitterizer is node module for linking twitter mentions, hashtags and urls.

###### Example

```
var twitterizer = require('twitterizer');

var str = "@goschevski is web developer #goschevski - http://www.goschevski.com";

var prepared = twitterizer(str);
// <a href="http://www.twitter.com/goschevski" target="_blank">@goschevski</a> is web developer <a href="http://www.twitter.com/search?q=%23goschevski" target="_blank">#goschevski</a> - <a href="http://www.goschevski.com" target="_blank">http://www.goschevski.com</a>

```

### replaceMentions()

Replace only mentions in a string.

###### Example

```
var twitterizer = require('twitterizer');

var str = "@goschevski is web developer #goschevski - http://www.goschevski.com";

var prepared = twitterizer.replaceMentions(str);
// <a href="http://www.twitter.com/goschevski" target="_blank">@goschevski</a> is web developer #goschevski - http://www.goschevski.com
```

### replaceHashTags()

Replace only hash tags in a string.

###### Example

```
var twitterizer = require('twitterizer');

var str = "@goschevski is web developer #goschevski - http://www.goschevski.com";

var prepared = twitterizer.replaceHashTags(str);
// @goschevski is web developer <a href="http://www.twitter.com/search?q=%23goschevski" target="_blank">#goschevski</a> - http://www.goschevski.com
```

### replaceUrls()

Replace only hash tags in a string.

###### Example

```
var twitterizer = require('twitterizer');

var str = "@goschevski is web developer #goschevski - http://www.goschevski.com";

var prepared = twitterizer.replaceUrls(str);
// @goschevski is web developer #goschevski - <a href="http://www.goschevski.com" target="_blank">http://www.goschevski.com</a>

```