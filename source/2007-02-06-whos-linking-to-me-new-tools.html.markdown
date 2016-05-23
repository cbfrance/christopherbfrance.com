--- 
kind: article
created_at: 2007-02-06 22:44:44
title: Who's linking to our website? New tools.
excerpt: "It is a pretty basic trick to get an idea of people that are linking to your site."
tags: [analytics, ops, metrics, evaluation, quantitative]
modified_on: 2009-01-30 10:46:25
status: publish
---

<span class="update">
<strong>6/25/07 UPDATE: I am obligated to point out that this little script has graduated from interesting to useless &mdash; thanks to the new <a href="http://www.google.com/analytics/#utm_source=en-ha-na-synsearch_brand&utm_medium=ha&utm_campaign=en&utm_term=google%20analytics">Google Analytics</a>, which is hands down the best tool for understanding web traffic. And it's bloody free. You probably knew this already. But, just in case, <a href="http://www.wildapricot.com/blogs/newsblog/archive/2007/06/21/how-to-use-google-analytics-to-track-your-top-blog-posts.aspx">here's a great new tutorial</a>. That is all. 
</strong></span>

It is a pretty basic trick to get an idea of people that are linking to your site. Just google:
<code>
link:http://mysite.com
</code>

But that is an extremely rudimentary technique for several reasons.
<ul>
	<li>You will probably get a bunch of *internal* links, which are pretty useless.</li>
	<li>You will not get a sense of the total number of links from each referrer — they are not tallied or ranked.</li>
	<li>You only get referrers for the individual page you type in, not your entire site. Which means that you are getting largely underreported numbers. (even http://www.yoursite.com is different from http://yoursite.com)</li>
</ul>
<blockquote>You asked, and we listened: We've extended our support for querying links to your site to much beyond the link: operator you might have used in the past. Now you can use webmaster tools to view a much larger sample of links to pages on your site that we found on the web. Unlike the link: operator, this data is much more comprehensive and can be classified, filtered, and downloaded. All you need to do is verify site ownership to see this information.<span class="attribution"> Peeyush, <a href="http://googlewebmastercentral.blogspot.com/">Google Webmaster Central Blog</a> </span></blockquote>
So yesterday I was super happy to discover via the trusty <a href="http://googlewebmastercentral.blogspot.com/">Google Webmaster Central Blog</a> that there is a new "links view" in the Webmaster Toolkit.

The Webmaster Toolkit is a service from Google that you really should be using. It takes just a few minutes to get started and then you get lots of data, including the new link data. If you haven't already (and, uh, you run a website), <a href="https://www.google.com/webmasters/tools/siteoverview">check it out</a> and you will be happy to pick up a bunch of free statistics about your site. Notably, you can also create an XML sitemap (not a graphical HTML sitemap, though!) of your site to make sure google is indexing the whole thing. And you can test your robots.txt file (important for keeping those pictures of the last drunken staff party out of images.google.com).

I did have a couple of problems with the data, though &mdash; there still is no way to get a good ranking of your referrers, or a ranking of your most popular pages. Luckily, you can download the entire file and do whatever you want with it. (hooray for openness!)

Since we have a bunch of clients I wanted to send this new data, I took the time to write a simple perl script. And I figured a few other people could use it.

It's here:

[unique_addresses.pl.txt]

<h3>Instructions for unique_addresses.pl</h3>
<strong>Prerequisites: Using this script requires that you know how to execute file from the command line (and that you have perl installed). This will only work for Mac/Linux folks (requires perl and the *nix commands for sorting). ... If you are a progressive blogger or organization and can't get this to work, email me your stats and I will process them for you.</strong>
<ol>
	<li>Download your entire external links file from the webmaster toolkit.</li>
	<li>Use Excel or something to pull out that column of external links, and save this as something like "referrers.txt"</li>
	<li>Repeat the above for your "pages" column, but name it something like "pages.txt"</li>
	<li>Download script.</li>
	<li>Make it excutable in the same directory as your "pages.txt" and "referrers.txt" files</li>
	<li>Run "./unique_addresses.pl" and it will prompt you through the rest.</li>
</ol>

<strong> Again, if you are working for a good cause but run into trouble, just email chris at blast dot com or leave a comment.</strong>