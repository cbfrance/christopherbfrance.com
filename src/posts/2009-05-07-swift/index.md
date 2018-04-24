---
kind: article
created_at: 2009-05-07 09:17:50
title: Swift
excerpt: "Our goal with Swift is to provide a crowdsourcing platform for data triage. Imagine something like Mechanical Turk used only for tagging news, photos, microblogging and videos."
tags: [swift, tagging, ux, design, presentation, meedan, ushahidi]
modified_on: 2009-09-22 01:16:12
status: publish 
path: /2009/05/07/swift
---

For the last 5 months I've been working with friends at <a href="http://ushahidi.com">Ushahidi</a> and <a href="http://meedan.net">Meedan</a> on a project nicknamed "Swift."

Our goal with Swift is to provide a crowdsourcing platform for "data triage." Imagine something like Mechanical Turk used only for tagging news, photos, microblogging and videos. There's no business model or anything like that &mdash; it's strictly Open Source Nonprofity Goodness(tm). Meedan and Ushahidi are partners in hacking it out.

As a user of Swift you can sit down at an "assembly line" of news and tag it. Swift gives you a straightforward aggregator for news (say, news about earthquakes in california) then asks you to tag all of the people, places and organizations in that firehose of data. With a little bit of effort (collecting a few rss feeds and marking up all the content) it becomes possible to put a very bright light on an emerging part of the web. You can, for example, tag violations of electoral code in an election, as we are doing with <a href="http://votereport.in">Vote Report India</a>, which uses Ushahidi and Wordpress as a platform for grassroots reporting in the month-long Indian election. 

I'm especially interested in knowing how much we can actually *do* with the public data that emerges in realtime during a crisis. From a journalistic perspective, it seems like there is an opportunity to understand more concretely <strong>what the hell is going on</strong>.

For Ushahidi, Swift is an extension of their exisiting SMS reporting cycle. By "listening" to the "outside" web in a more structured way, the hope is that we can provide more relevant alerts to people on the ground in a crisis. 

For Meedan, Swift is a tool for a team of editors who need to produce interesting content for their digital newsroom. Because it is an aggregator, Swift serves naturally as a listening post as well as a tagging workbench. Rope in a few feeds (such as <a href="http://search.twitter.com/search?q=election">Twitter search results feed for "election" </a>) and then do location extraction for the Middle East with <a href="http://www.opencalais.com/">Calais</a> on that feed, and you have a pretty cool stream of entities.

Today we had a great meeting at InSTEDD, with a crazy good crowd of people &mdash; everybody was in town for the <a href="http://hrc.berkeley.edu/events/newmachineconference/">conference at Berkeley</a>. Thanks to everyone for their ideas and support!

Here's my presentation from today:

[http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=dashboardshort-090507011606-phpapp02&rel=0&stripped_title=swift-update-may-6]

[http://www.slideshare.net/unthinkingly]

All of the photos and links can be found on <a href="http://flickr.com/unthinkingly">my Flickr page</a>.

Swift seeks to publish all of the entities that concerned communities publish about crisis, both hot flash and slow burn events. The core use case is for the period immediately following a disaster or crisis, during the hours and days of confusion. 

<blockquote><ul><li><a href="http://groups.google.com/group/swiftriver">The Swift Mailing List</a> </li>
    <li><a href="http://swiftapp.pbwiki.com/">The Wiki</a></li>
    <li><a href="http://swiftapp.org">The Website</a></li>
    <li><a href="http://github.com/ajturner/swiftriver/tree/master">github repo</a></li> </ul>
</blockquote>

One thing that is always interesting about Swift is that it is a very unusual use case. The tragedy of a crisis creates a temporary period of great social empathy during which many "rules" of interaction design break down. This is a design opportunity. Many people are willing to match their #have to someone else's #need, but they don't have a medium for volunteering, or a network of supporters who can contextualize and respect their work. We just watch CNN and feel powerless; we would love a way to help, as an individual, from across the world. An improved marketplace of volunteerism is possible if we can design the appropriate interactions.