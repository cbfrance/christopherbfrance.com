#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile

# Migrate frontmatter path entry
# 
# From: "path: /2010-03-15-recent-meedan-press"
# To: "path: /2010/03/15/recent-meedan-press"

for filepath in src/posts/[0-9]*/**/*.md; do 
  title=${${filepath%/*}##*/}
  echo $filepath

  # Update the 'path' entry ...
  # `brew install gsed` on MacOS
  gsed -E -i 's/path: \/([0-9]{4})-([0-9]{2})-([0-9]{2})-(.*)/path: \/\1\/\2\/\3\/\4/' $filepath
done
