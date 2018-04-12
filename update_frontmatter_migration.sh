#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile

# We need to flatten the nested directory structure used by nanoc into the flat format used by middleman.
# 
# From nanoc format: 
# 
# source/2012/01/example-article.html
# 
# into middleman format:
# 
# source/2012-01-01-example-article.html.markdown

# This works but only has the month:
# 
# zmv -n 'source/(*)/(**)/(*)' 'source/${1}-${2}-${3}'

# This example allegedly does what I want, but's hard to read
# From: http://strcat.de/zsh/#zmv
# 
# zmv '(*).ps' '$1-${${${mapfile[$f]##*%%Title: }%% *}//[^a-zA-Z0-9_]/}.ps'

for filepath in src/posts/[0-9]*/**/*.md; do 
  title=${${filepath%/*}##*/}
  echo $title 

  # echo `head $filepath`
  # date=`head -20 $title | 
  # grep "^created_at:" | 
  # awk -F: '{print$2}' | 
  # awk '{print$1}' | 
  # sed 's/ //g'` \
  # && mv $f source/$date-$filename
done
