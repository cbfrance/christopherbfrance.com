---
kind: article
created_at: 2008-06-20 05:09:08
title: Visualizing Human Rights with the Google Charts API
excerpt: "There are plenty of libraries for managing the requests to the API, and, in some simple cases you can even code it by hand, since all of the code is simply passed through a query tag on an image url."
tags: [dataviz, programming, code]
modified_on: 2009-01-30 10:43:18
status: publish 
path: /2008/06/20/visualizing-human-rights-with-the-google-charts-api
---

Smartly presented information is a nonprofit's best friend. If you can't communicate the problem, no one is going to give a damn. <a href="http://whiteafrican.com/?p=1081">Hash's blog</a> just pointed me to some powerful charts Sokwanele mapping project , which I've mentioned <a href="/2008/04/11/zimbabwe-election-watch-map.html">previously</a>. These charts are extremely important data to have in the public domain, and it's great that they 
appear well-executed and polished, with a high resolution of visual information. 

<img src="/static/images/charts.jpg" title="google charts" alt="pretty charts, not so pretty data."/><h3 class="caption">Google Charts from Sokwanele and Mobile Researcher</h3>

The charts at <a href="http://www.populi.net/mobileresearcher/">Mobile Researcher</a> also caught my eye recently (also pictured, at right and bottom). Turns out they were both made with Google Charts. I hadn't used it before, but I recognized their densely set labels and had some vague ideas that there was a Ruby wrapper. And I just thought that the Mobile Researcher charts were really beautiful. Turns out it's super easy. There are plenty of libraries for managing the requests to the API, and, in some simple cases you can even code it by hand, since all of the code is simply passed through a query tag on an image url. <blockquote class="small">What it does do is proved fodder for organizations inside and out to make an even stronger case against this repressive regime.
<span class="attribution">- Erik Hersman @ <a href="http://whiteafrican.com">whiteafrican.com</a></span></blockquote>But in most of the cases the data is hashed somehow with javascript, since urls can only be so long. Since I was working in a Rails  app, I used <a href="http://googlecharts.rubyforge.org/">a great ruby library</a> and was up and running very quickly. I wholeheartedly recommend them anytime you need simple, sharp graphics to illustrate your research. If you have a web app or with dynamic charts, it's a no-brainer, since generating images is relatively intensive memory-wise.

All this is to say that something like this: 

 
  
```html
<img src="http://chart.apis.google.com/chart?chd=t:6,2,6,4,2,4,7,3,4,2,3,4 &chco=0077CC&chs=120x40&cht=ls">;
```

 

Turns into this: 

<img src="/static/images/spark.jpg" alt="sparkline" class="fullwidth"/>

Or you can abstract the access to make it easier with a library like <a href="http://googlecharts.rubyforge.org/">this</a> with a method like this:


```ruby
    #usage
    google_pie('val1', 'val2', 'val3')
    #method
    def google_pie(*args)
    size = "250x100"
    url  = "http://chart.apis.google.com/chart?"
    return < img src=\"#{Gchart.pie_3d( :background => 'E9E7DD', :size => '300x80', :data => *args)} \" />
    end
  
```

But the API of course is language neutral, and I am sure it would be just as easy in most any language. Oh, and it's free! (Though capped at <a href="http://code.google.com/apis/chart/">10k charts per day</a> ... which would be a good problem to have, I suppose.) 

