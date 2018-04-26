---
kind: article
created_at: 2018-04-25 00:14:00
title: Migrating to Gatsby from Middleman
excerpt: "I've had fun migrating this site to GatsbyJS lately."
tags: [js, react, shell]
path: /2018/04/25/migrating-to-gatsby-from-middleman
published: false
---

Sometimes I think this site is just an excuse to migrate from one CMS to another. 😛

For the last few years this content was hosted in Middleman, which is a great, stable environment for housing your words. I use Middleman a lot and had few complaints about it — I still use Middleman for a number of other sites such as <a href="http://meedan.com">meedan.com</a> and <a href="http://credibilitycoaltion.org">credibilitycoaltion.org</a>. 

I chose Middleman because most of my projects at the time were in Ruby — now most of my projects are in React, so I've switched to a React-based static site generator: [GatsbyJS](https://gatsbyjs.org).

It's not been a totally smooth ride for me — it's still a relatively young project (though popular) and I'm still learning a lot about javascript. But I like the puzzle of learning how to do things in such a different way. The best part is getting more experience with [GraphQL](https://graphql.org/ "GraphQL | A query language for your API").

Moving from another markdown based blogging system is pretty easy, there are several excellent tutorials (like the one by [Emmanuel Yusufu])(https://medium.freecodecamp.org/how-to-build-a-react-and-gatsby-powered-blog-in-about-10-minutes-625c35c06481) and some official starter projects (like the one by [Kyle Mathews](https://github.com/gatsbyjs/gatsby-starter-blog)). I recommend starting with just the most basic gatsby-starter-default project and building up from there instead of taking shortcuts with one of the blog starters. Even the simplest blog starters come with numerous extra packages that create surface error for confusion, which is not really worth it when you are trying to learn a new system.

So my setup process was something like this: 

```shell
  npm install --global gatsby-cli
  gatsby new gatsby-example-site
  cd gatsby-example-site
  npm run develop
```


### Migrating frontmatter

If you already have a bunch of posts, you might need to amend your frontmatter (and paths to your files) to accomodate some of gatsby's opinions (you can also adjust gatsby code to work with your existing frontmatter ... but I found it easier to write some one-liners and play along with Gatsby's preferences.)


### Moving posts into place

Moving posts into place, in my case meant I needed to create directories based on the name of the file. In middleman the date was in the file name, but in Gatsby the date is the directory containing an index.md. 

For this script to work you'll need [zsh](http://ohmyz.sh). I like `zsh` because it has very flexible path globbing. And I use zsh's lovely `zmv`, and a tiny custom `mmv` function.

```shell
  #!/usr/local/bin/zsh
  autoload -U zmv

  # From middleman: source/2012-01-01-example-article.html.markdown
  # To gatsby: src/posts/2012-01-01-example-article/index.md

  # copy the source files over 
  mkdir -p ./tmp
  cp -R ../unthinkingly.com/source/* ./tmp

  # Define 'mmv' for making directories 
  mmv() {mkdir -p "${2%/*}/"; echo mv -- "$1" "$2";}

  # Make the dirs
  zmv -P mmv './tmp/([0-9]*)(*.html.markdown)' './src/posts/${1}/index.md'

  # Move the files
  zmv './tmp/([0-9]*)(*.html.markdown)' 'src/posts/${1}/index.md'

  # Cleanup
  rm -rf tmp 

```


### Making images work

Here's one of the scripts I wrote to change image paths.

And on MacOS you might want to use gsed instead of regular sed (`brew install gsed`); I found it fixed a problem when inserting newlines. But Sed should work here too.

<p class="marginalia">I love that <a href="https://en.wikipedia.org/wiki/Sed">Sed is from 1973</a>.</p>


```shell
  #!/usr/local/bin/zsh

  for filepath in src/posts/[0-9]*/**/*.md; do 
    echo $filepath
    # Fix the image paths
    gsed -E -i 's/src="\/images/src="\/static\/images/g' $filepath
  done
```

I use regular html a lot in my markdown, so the paths are typical `src` attributes.

Note that my images are in the `static` directory. For better caching I might move them into the directory that contains the blog post. I guess that would require a shell script that reads the markdown file, finds the image that is being used in the file, and then get the image to snuggle up right next to the file in the same directory. 🤔 Hmm. Could work. Maybe later.

## Adding path frontmatter

Another issue was that Gatsby relies on a `path` key in the frontmatter, which again is possible to infer from the filename when using the `CreatePage` API ... but again I figured it was easiest just to play along and change it in all the files with sed.

```shell
  #!/usr/local/bin/zsh

  # From: [no path key in frontmatter]
  # To: path: title-of-post

  for filepath in src/posts/[0-9]*/**/*.md; do 
    title=${${filepath%/*}##*/}
    echo $filepath
    gsed -E -i 's/status: publish/status: publish \npath: \/'$title'/g' $filepath
  done

```

### Fighting linkrot

Because I wanted to keep the older nested style of the middleman paths (do your part to fight linkrot!) I needed to transform them into a nested style. Now that we added that `path` key, this is a matter of updating frontmatter again (no need to add more nested subdirectories.)

```shell
  #!/usr/local/bin/zsh

  # Update paths
  # 
  # From: path: 2018-01-01-blog-post-title/
  # To: path: 2018/01/01-blog-post-title/

  for filepath in src/posts/[0-9]*/**/*.md; do 
    title=${${filepath%/*}##*/}
    echo $filepath

    gsed -E -i 's/path: \/([0-9]{4})-([0-9]{2})-([0-9]{2})-(.*)/path: \/\1\/\2\/\3\/\4/' $filepath
  done

```

Also here are some random tips that are worth noting: 

  * You need to stop and start the `gatsby develop` process every time you touch the Node APIs (in `gatsby-node.js`). 

Things I love about Gatsby: 
  
* Writing filesystem code in javascript, then components and templates in javascript, then my *styles* in javascript with styled-components. Phew, awesome. I love staying in on language.
* Working with graphql is super fun. Way better than constantly over- and over-fetching with REST APIs. Lovely that it comes with a graphql editor, graphiql, which makes it so fun to play around with the query syntax.
* Performance is amazing by default. Without trying I got a 93 lighthouse score.

A few things I'm a little disappointed about with Gatsby: 

* The startup time for development mode (which is probably a full rebuild most times) is not super fast (5–10 seconds or so) which is a drag if you're debugging something in your `gatsby-node.js` and have to keep rebooting.
* Live reloading is not totally consistent, sometimes you have to refresh the page. It's about the same flakiness I'm used to with LiveReload which is many years old. (I love live reloading in general and can't wait for it to be more consistent in our tooling.)
* Error messages in the Gatsby console are not always super clear. Lots of things can go wrong if you don't know the conventions. When in doubt make sure you restart the server.
* You can't use React components in markdown without some [funky workarounds](https://using-remark.gatsbyjs.org/custom-components/) ... apparently this is a kinda hard problem. There is an [open ticket for better Gatsby support](https://github.com/gatsbyjs/gatsby/issues/312) for this and it seems folks are working on react-in-js solutions in general, such as rauchg's [proposal for .mdx](https://spectrum.chat/thread/1021be59-2738-4511-aceb-c66921050b9a). This would be really fun to drop react components into markdown prose. (Gatsby does this well with regular "pages" but not markdown files.)


  <p class="marginalia">Prose plus interactive components makes me think of literate programming, Brett Victor's concepts around <a href="http://worrydream.com/#!/ExplorableExplanations">explorable explanations</a>, and new platforms like <a href="https://beta.observablehq.com">Observeable</a>.</p>


