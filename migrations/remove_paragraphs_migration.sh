#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile

# Remove paragraphs
# 
# From: "<p>Stuff</p>"
# To: "\nStuff\n"

for filepath in src/posts/[0-9]*/**/*.md; do 
  title=${${filepath%/*}##*/}
  echo $filepath

  # Replace paragraph tags with newlines
  gsed -E -i 's/<p>/\n/g' $filepath
  gsed -E -i 's/<\/p>/\n/g' $filepath
done
