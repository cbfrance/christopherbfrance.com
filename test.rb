#!/usr/bin/env ruby
#
require "pry"
require "uri"
require 'html/proofer'

build_directory = "build"
files = Dir.glob(File.join(".", build_directory, "**/*.html"))
puts "Checking #{files.length} files."

links = []
files.each do |filename|
  File.open(filename) do |f|
    URI.extract(f.read, "http").each do |link|
      links << link
    end
  end
end

puts "-------------------------------------------"
puts "there are #{links.length} external links recognized by URI.extract"

puts "Run the HTML check? y/n"
response = gets.chomp

if response == "y"
  opts = { 
    :verbosity => "debug", 
    :check_html => true, 
    :validation => { :ignore_script_embeds => true } 
  }
  
  HTML::Proofer.new(build_directory, opts).run
elsif response == "n"
  puts "ok, skipping it"
else 
  puts "I didn't understand."
end


