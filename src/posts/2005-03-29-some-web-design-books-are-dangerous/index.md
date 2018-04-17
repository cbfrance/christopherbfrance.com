---
kind: article
created_at: 2005-03-29 01:40:00
title: Some Web Design Books Are Dangerous
excerpt: "using named vs. hex color values"
tags: [css, webdev]
modified_on: 2008-04-05 05:38:37
status: publish 
path: /2005-03-29-some-web-design-books-are-dangerous
---

I recently picked up a copy of the "for Dummies" CSS tutorial book and was disappointed to find the following in a section about using named vs. hex color values (like cornflowerblue instead of #6495ED):

<blockquote>
    "... my advice is to just assume that pretty much everyone who'll see your web page uses IE [Internet Explorer]. Why? Because most everyone does use IE." p. 79 CSS Web Design For Dummies, 2005
</blockquote>

Thankfully, our dear author is misinformed, or simply addled. Unfortunately, the sentiment that "only Internet Explorer matters" is a popular one still. New webmasters please be 'ware: there are alternatives to Microsoft IE, most notably <a href="http://www.firefox.com/">Firefox</a> which has more than 25 million downloads and is now <a href="http://www.w3schools.com/browsers/browsers_stats.asp">reported by the W3C</a> to have nearly 20% usage on the internet. That's a lot of people who will be seeing a screwed up page if you only test your work in IE.

Apparently, people want to test and develop in IE because it simplifies life.  "Your job is much easier," writes the Dummies author, if you only design for IE6. Indeed, browser conflicts are tough to deal with as a web developer. But let's get things straight: Internet Explorer doesn't follow standard CSS rules, which makes everyone's life much more complicated. Read all about the problems (and yes, the necessary workarounds) at <a href="http://www.positioniseverything.net">www.positioniseverything.net</a>.