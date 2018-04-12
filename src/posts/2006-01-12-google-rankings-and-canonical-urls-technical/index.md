--- 
kind: article
created_at: 2006-01-12 21:22:05
title: Google Rankings and "Canonical" URLs (technical)
excerpt: "Finally some useful help from the 'celebrity engineer' Matt Cutts, one of the few people in the world that has had intimate relations with the Google Pagerank algorithm."
tags: [google, seo]
modified_on: 2008-04-05 06:46:37
status: publish
---

Finally some useful help from the "celebrity engineer" Matt Cutts, one of the few people in the world that has had intimate relations with the Google Pagerank algorithm.  (EDIT: He also happens to use Wordpress, not Blogger. Hmmm.)

This is a description of how to best reference your urls in order to ensure that Google understands them clearly. (the corresponding clarity, is designed &mdash; clearly &mdash; to increase your rank.) 

From the <a href="http://www.mattcutts.com/blog/seo-advice-url-canonicalization/">blog </a>of Cutts: 

<blockquote class="large">Q: What is a canonical url? Do you have to use such a weird word, anyway?
A: Sorry that it' a strange word; that's what we call it around Google. Canonicalization is the process of picking the best url when there are several choices, and it usually refers to home pages. For example, most people would consider these the same urls:

    * www.example.com
    * www.example.com/
    * example.com
    * example.com/
    * www.example.com/index.html
    * example.com/home.asp
</blockquote>

Roger Johannsen at <a href="http://www.456bereastreet.com/archive/200601/search_engines_and_canonical_urls/#comments">456 Berea St. </a>(web design) says he adds 

<code>   1. RewriteCond %{HTTP_HOST} ^456bereastreet\.com [NC]
   2. RewriteRule ^(.*) http://www.456bereastreet.com/$1 [R=301,L]
</code>

to his htaccess file in order to ensure that "www" is added to all requests for a page on his server. Great work. Great post. Thanks, Matt and Roger. 

