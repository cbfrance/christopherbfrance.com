#!/usr/local/bin/zsh
autoload -U zmv
# zmodload zsh/mapfile

# middleman format:
# 
# source/2012-01-01-example-article.html.markdown

# gatsby format:
# 
# src/posts/2012-01-01-example-article/index.md

# copy the source files over 
mkdir -p ./tmp
cp -R ../unthinkingly.com/source/* ./tmp

# Migrate the files from tmp to the filename format expected by gatsby
#
# Define 'mmv' for making directories 
mmv() {mkdir -p "${2%/*}/"; echo mv -- "$1" "$2";}
# Make the dirs
zmv -P mmv './tmp/([0-9]*)(*.html.markdown)' './src/posts/${1}/index.md'
# Move the files
zmv './tmp/([0-9]*)(*.html.markdown)' 'src/posts/${1}/index.md'

# Cleanup
# 
rm -rf tmp 
