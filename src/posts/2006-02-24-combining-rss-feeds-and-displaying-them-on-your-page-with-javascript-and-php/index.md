--- 
kind: article
created_at: 2006-02-24 21:15:50
title: Combining RSS feeds and Displaying them on Your Page with Javascript and PHP
excerpt: "Last night I was trying to do something that I thought would be pretty simple: display a bunch of recent weblog posts on one page. "
tags: [webdev, rss, biofuels]
modified_on: 2008-04-05 07:05:34
status: publish 
path: /2006-02-24-combining-rss-feeds-and-displaying-them-on-your-page-with-javascript-and-php
---

Last night I was trying to do something that I thought would be pretty simple: display a bunch of recent weblog posts on one page. 

There is a great online community of folks in the biofuels blogosphere, and this page would give a quick summary of their myriad, nerdy, wonderful events and research. 

So the goal is to have the title of a weblog, followed by the most recent posts, each with the date posted and a bit of the post body. The entire web page might be called "biofuels digest," with a total of perhaps 30 weblogs. Often on the web you will see "blogrolls" that list lots of blogs, but these are usually just links to the blogs (there isn't a post excerpt) and they are almost always either hardcoded html or javascript-included from a third party like <a href="http://www.bloglines.com">Bloglines </a>(see my own blogroll on the front page). 

I'd had experience with building this type of page last year, when I just wanted to have an "aggregator" page of all my most loved online reading. I ended up just slapping things around with <a href="http://magpierss.sourceforge.net/">Magpie RSS</a> (an excellent open source PHP class), and it worked fine.  Not slick, but fine. 

I could have easily used a number of services that are available online for displaying other people's rss on your own page, without all the mussing with PHP. (<a href="http://www.feedburner.com/fb/a/home">Feedburner </a> or <a href="http://www.feeddigest.com/">Feed Digest </a>are services that I'd recommend for doing this type of thing, if you want to go that route.)  But who wants to mess with a bunch of javascript calls to someone else's server? And you get stuck with limits on the number of feeds you can run. <em>And </em>the there's the annoying "powered by ..." sticker at the bottom. <strong>And </strong>you'd have to use a third-party RSS splicer to combine all of your feeds.

So forget all that, because this isn't just a wonky personal project &mdash; it will hopefully end up being part of the excellent <a href="http://www.biofuels.coop/">Piedmont Biofuels</a> website &mdash; so  it needs to be quick and hosted on the server.  

So last night I opened up the latest installation of MagpieRSS and installed it on my server, created all of the necessary php for each of the blogs, and I ended up with a decent document. The major problems with this first version (using just the Magpie class) is the inconsistent treatment of the posts &mdash; some appear and some don't &mdash; and the improper encoding of the blogs. (I went 'round and 'round with the encoding. It's a common problem, but I couldn't get those damn posts clean.) Probably a few days in the <a href="http://sourceforge.net/mailarchive/forum.php?thread_id=9384589&forum_id=12796">Magpie listserv archives</a> at Sourceforge would clear all of this up ... but the archives are exceptionally annoying, the Magpie blog is down, and <a href="http://www.nonprofitdesign.org/biofuels/news/biofuels-aggregator1.php">the first version</a> was still surprisingly slow anyway, even with the cache working.

So I found another solution, Alan Levine's <a href="http://jade.mcli.dist.maricopa.edu/feed/">Feed to JS</a>, which is built on Magpie.  This is an excellent free (and <em>libre</em>) service that has both hosted version and downloadable script. (It relies on the magpie class, but uses javascript to display the results., giving the added benefit of having an administrator's page that simplifies some of the options for display (such as the number of posts), and it yields much more compliant utf8 encoding (no more bloody diamond question marks in place of fancy quotes). 

The downside: there is currently no way to "splice" all of the feeds together before running them through the javascript, so you end up calling the js file for each feed you parse. I felt sure this would make it to slow to be usable, but I think (hope) I was wrong, even with 25 blogs on the same page. I trimmed each of the blogs to display only 3 posts anyway, so at least the compiled filesize is real slim.

(Actually, while I'm writing all this out, I should bother to mention that there are a hell of a <a href="http://cogdogblog.com/2005/10/12/rss-mixers/">lot of 3rd-party RSS splicers/combiners</a> ... but, again, they're all third party, and they seem to go extinct quickly: e.g. the defunct <a href="http://www.rollup.org/">rollup.org</a>. Most of these also have ads, are not free, or have limitations on the number of feeds, like feed digest. I was surprised and disappointed that I couldn't find something to install on the server that would take care of this  &mdash; somebody please let me know if there's something reliable out there. This would allow me to combine all the posts and just run the JS once.) 

So, from a programmer's view, this is a little inelegant, but the result is really consistent, and it still comes in at 8.5 seconds on 56K.  The (minimally styled) latest version is <a href="http://www.nonprofitdesign.org/biofuels/news/biofuels-aggregator3.php">here</a>. 