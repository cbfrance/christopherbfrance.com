#!/usr/local/bin/zsh
autoload -U zmv
zmodload zsh/mapfile

for filepath in src/posts/[0-9]*/**/*.md; do 
  echo $filepath

  # Fix the image paths
  # ... for regex readability we'll just do it twice.
  # First for the double quotes
  gsed -E -i 's/src="\/images/src="\/static\/images/g' $filepath
  # Then for the single quotes
  gsed -E -i "s/src='\/images/src='\/static\/images/g" $filepath
done
