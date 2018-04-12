--- 
kind: article
created_at: 2007-01-05 18:38:23
title: Low-Bandwidth user experience
excerpt: "I am thinking about how web developers can become more invested in the ultra-low-bandwidth user experience."
tags: [loband, webdev, caching, code, rural, optimization ]
modified_on: 2008-04-05 07:19:18
status: publish 
path: /2007-01-05-low-bandwidth-user-experice
---

I make websites, and I manage a few web servers. Making sure that pages load quickly is a pretty fundamental part of my job. 

Lately I have been thinking a lot about how much more important this concern is for people who are in low-bandwidth  environments (my house in rural NC), and especially in what you might call "ultra-low bandwith" places, where issues like cost or a lack of reliable power compound the issue by an order of magnitudes.

I am thinking about how web developers can become more invested in the ultra-low-bandwidth user experience.  

When it comes to bandwidth, international bloggers are <a href="http://www.globalvoicesonline.org/found/?cof=FORID%3A9&q=bandwidth&btnG=Search+%C2%BB&cx=000932313665553177304%3Adg67ra11mvs#1035">talking about something totally different</a> compared the "optimization" issues that web developers are fussing over. 

For example, the <a href="http://www.ysearchblog.com/">Yahoo User Experience blog</a> has just posted a really interesting analysis of page load time optimization techniques. But it occurs to me that the audience that they are writing for is largely the elite of the internet &mdash; they are trying to save a few tenths of a second. They are tuning a product, not really thinking about ultra-low-bandwidth situations. Which is fine, that's why they exist I guess. 

I mean, It's web development 101 that you need to make you pages small. Load time is the number one element in usability. Even with that fancy DSL line, you appreciate pages that function in 1/10ths of a second instead of 2 or 3 seconds.  I'll take it. And I am glad that they Yahoo folks are doing this great research. 

For example, the <a href="http://yuiblog.com/blog/2006/11/28/performance-research-part-1/">a November post</a> made me think about my techniques a bit differently &mdash; they pointed out that having a low-weight page is nice, but the speed experience is much more greatly affected by the <strong>number</strong> of elements on the page. An understanding of <a href="http://rescomp.stanford.edu/~cheshire/rants/Latency.html">latency vs. bandwith</a> makes this point even clearer, once you consider it.

Today they published an even more interesting look at the browser, focusing on the fact that browser caching appears to only be utilized in about 20% of browsers! As a developer there is no way to force a user's browser to cache data, which could easily reduce page load times by about 3x, depending on the content being served, mostly because of the point above: you save the most time by reducing the number of http requests altogether.

For me this immediately made me think that this is a technique that should be built into any browser that gets used in a low-bandwidth environment ... but I bet that there are innumerable browsers installed in that do not take advantage of this feature, even where connections are extremely slow. Hopefully the browsers that ship with the $100 laptop (and its kind) with be caching as much as possible. ...