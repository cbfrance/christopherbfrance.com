#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile

for filepath in src/posts/[0-9]*/**/*.md; do 
  title=${${filepath%/*}##*/}
  echo $filepath

  # Update the 'path' entry ...
  # `brew install gsed` on MacOS
  gsed -E -i 's/path: \/([0-9]{4})-([0-9]{2})-([0-9]{2})-(.*)/path: \/\1\/\2\/\3\/\4/' $filepath
done
