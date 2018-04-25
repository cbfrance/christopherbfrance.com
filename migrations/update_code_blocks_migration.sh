#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile

# Update code blocks to markdown fenced blocks
# 
# From: "<code><pre>sudo stuff</pre></code>"
# To: "\n```\nsudo stuff\n```\n"

for filepath in src/posts/[0-9]*/**/*.md; do 
  title=${${filepath%/*}##*/}
  echo $filepath

  gsed -E -i 's/<code>/\n```\n/' $filepath
  gsed -E -i 's/<\/code>/\n```\n/' $filepath
  gsed -E -i 's/<pre>/ /' $filepath
  gsed -E -i 's/<\/pre>/ /' $filepath
done
