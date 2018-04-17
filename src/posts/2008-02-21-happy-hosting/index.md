---
kind: article
created_at: 2008-02-21 22:07:38
title: "Happy Hosting "
excerpt: "Their VPS plans are a reasonable deal, but, as always, the support is what is always most important when choosing a host unless it's a super small static site, in which case the big guys like mediatemple, dreamhost, bluehost are fine. (Oh and check wordpress.com if you need a free site.)"
tags: [ops, rimuhosting]
modified_on: 2008-04-05 07:35:15
status: publish 
path: /2008-02-21-happy-hosting
---

If you need a professional application server, particularly for rails, I'm recommending <a href="http://rimuhosting.com/">Rimuhost</a> these days. 

Their VPS plans are a reasonable deal, but, as always, the support is what is always most important when choosing a host unless it's a super small static site, in which case the big guys like mediatemple, dreamhost, bluehost are fine. (Oh and check wordpress.com if you need a free site.)

Just now I've been getting really clear, friendly, (and super fast) support from Brandon at Rimuhost, and he showed me a great trick for removing a password from a ssl cert: 

<code>
cd /usr/local/apache2/conf/ssl && mv sitename.com.key sitename.com.key.with_password
openssl rsa -in sitename.com.key.with_password -out sitename.com.key
</code>

Previously one of their techs was chatting to me well into the evening about a SQL issue I was having, free of charge, <em>after he got off of work</em>, just cause he was cool. and I love their VPS control panel, which lets you reboot, power down, and upgrade your RAM/HDD on the fly.

If you need a development and production box, they will clone your production VPS (for free), in under an hour. Fastest demo box I've ever set up!