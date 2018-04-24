---
kind: article
created_at: 2007-05-13 21:24:26
title: "Wanted: An open-source, user-centered touchscreen platform"
excerpt: "Fundamentally I think that <em>touch</em> is intimate and intuitive, and clearly touchable interfaces have incredible potential, especially for the folks that haven't been brow-beaten into adapting to 20th-century conventions of computer interfaces like the QWERTY keyboard."
tags: [touch, ui, baobab, linux, design, tablet]
modified_on: 2008-04-05 07:28:01
status: publish 
path: /2007/05/13/wanted-an-open-source-user-centered-touchscreen-platform
---

There has been a lot of excitement recently around a couple of developments in touch screen interfaces:  First there was the <a href="http://www.youtube.com/watch?v=UcKqyn-gUbY&mode=related&search=">insane presentation at TED 2006</a>. Secondly, of course, the iPhone made everyone all hot in the pants for it's touchable goodness.

<blockquote> In Malawi, the NGO <a href="http://www.baobabhealth.org/">Baobab Health Partnership </a>... adapted Linux to $100 touchscreen Internet appliances, then wrote a program for Opera to run in full-screen kiosk mode. The resulting terminal can easily manage the nation's health data and is scalable wherever a web connection can be made.
<span class="attribution"><a href="http://www.vestaldesign.com/blog/2007/03/malawi-linux-the-fight-against-hiv.html">J. Goodman at Vestal</a></span></blockquote>

Fundamentally I think that <em>touch</em> is intimate and intuitive, and clearly touchable interfaces have incredible potential, especially for the folks that haven't been brow-beaten into adapting to 20th-century conventions of computer interfaces like the QWERTY keyboard.

(i.e., the billions of people that will be introduced to "desktop" computing the next decade. See the OLPC, <a href="http://wiki.laptop.org/wiki/Current_events">just launched for reals in Uruguay</a>.)

So I'm excited about a new project at work that involves designing a web application for use with a touch screen interface. When I first heard about it from the client I was coffee-though-the-nose excited because I have been infatuated by a recent project I read about on Vestal: <a href="http://www.vestaldesign.com/blog/2007/03/malawi-linux-the-fight-against-hiv.html">Malawi, Linux, & The Fight Against HIV</a>. I knew immediately that I was going to rip off the idea. (In the best open source sense, of course.) 

<img src='/static/images/touchscreen.jpg' alt='Baobab clinic.' />Unfortunately the iOpener touchscreen used in the project is no longer for sale (it had a lovely $100-$200 price tag b/c it came with some money-making software &mdash; there's a funny story about the <a href="http://www.wired.com/science/discoveries/news/2000/03/34977"> linux hack</a>), so I was hoping someone might have some idea about how to implement this as cheaply as possible. 

A few criteria: 

<ul>
	<li>As open-source as possible</li>
	<li>Durable</li>
	<li>Replicable</li>
	<li>Low Power</li>
	<li>Low CPU resources (The machine will be cheap, with flash memory, prob.)</li>
	<li>Beautiful (in a Platonic way <grin>)</li>
</ul>


Basically I want to avoid wire splicing and flaky homegrown drivers in favor of something that is replicable and extremely flexible. I want to be able to develop a web application with an appropriate UI and let it rip. (Which will be greatly facilitated by the work of the Baobab programmers' "<a href="http://www.baobabhealth.org/2006/08/30/touchscreen-toolkit-documentation/">touchscreen toolkit</a>"). This might not be easy given the limitations of cheap machines.  
  
So far I've got an <a href="http://www.wdlsystems.com/modperl/view_services.cgi?r=detail&prod_num=1EBOX23&aisle_id=799">EboxPC</a> in the office (a nice, fanless machine with CF and VESA mounts for the back of the monitor) with some form of embedded Linux (we've built a tiny Linux distro for our rural wireless network that might be usable if we can get the drivers to work with the touch screen). Looks like we can get screens for about $100 and then we'll have to put a touch screen on top. Regardless, this is still in the brainstorming phase, so that's all likely to go out the window.

<strong>Anyway, what good is a touch screen like this? </strong>

Well, combined with the right software, I think you can really leverage usability to do a hell of a lot:

<ul>
	<li>Make a huge impact in developing world healthcare like Baobab has done. </li>

	<li>Collect data easily from a kiosk at a disaster area.</li>

	<li>Setup a database-driven check-in desk at your next nonprofit conference.  </li>

	<li>Collect survey data remotely (anywhere in reach of the net).</li>

	<li>Setup a small store without an incredibly expensive, proprietary POS system. </li>

</ul>

I think there are lots of possibilities given that the interface could just be so much more usable. Just looking into it briefly I found an <a href="http://www.cooperativegrocer.coop/cg2003/0503_anderson.html">open source POS system for use in cooperative markets</a>. Brilliant. This is software that could really benefit from an inexpensive stable touchscreen implementation.

Does anyone have any experience or ideas? 

I'll be posting my findings here, along with the software design considerations that I run into. 