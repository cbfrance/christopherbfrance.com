#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile


for filepath in src/posts/[0-9]*/**/*.md; do 
  title=${${filepath%/*}##*/}
  echo $filepath

  # Add the 'path' entry ...
  # Which in our case is the name of the parent directory ... 
  # `brew install gsed` to add newlines properly on MacOS
  gsed -E -i 's/status: publish/status: publish \npath: \/'$title'/g' $filepath
done
