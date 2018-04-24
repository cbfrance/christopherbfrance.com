---
kind: article
created_at: 2008-04-11 08:40:30
title: Command line metrics
excerpt: "Speaking of personal metrics ..."
tags: [cli, artifact]
modified_on: 2008-04-11 08:40:30
status: publish 
path: /2008/04/11/command-line-metrics
---

Speaking of personal metrics ...

<pre>
<code>
simone:~ chris$ history|awk '{a[$2]++} END{for(i in a){printf "%5d\t%s\n",a[i],i}}'|sort -rn|head
   80   cd
   70   ruby
   44   svn
   33   rake
   28   ll
   24   ls
   23   rm
   17   ssh
   17   df
   12   mate
</code>
</pre>
