require 'nanoc3/tasks'
require 'fileutils'

# ===================================
# = this section just brainstorming =
# ===================================

namespace :blog do
  desc "tasks for managing a nanoc-based blog with compass."
  task :startup do 
    open_new_window(bottom,left)
    `cd /Users/chris/git/unthinkingly2`
    `nanoc aco`
    open_new_window(bottom,right)
    `cd /Users/chris/git/unthinkingly2`
    `compass -w`
    open_new_window(top,left)
    `cd /Users/chris/git/unthinkingly2`
  end
end

# ==========================================
# = comes with mgutz nanoc blogging bundle =
# ==========================================

namespace :create do
  desc "Creates a new article"
  task :article do
    $KCODE = 'UTF8'
    require 'active_support/core_ext'
    require 'active_support/multibyte'
    @ymd = Time.now.to_s(:db).split(' ')[0]
    if !ENV['title']
      $stderr.puts "\t[error] Missing title argument.\n\tusage: rake create:article title='article title'"
      exit 1
    end

    title = ENV['title'].capitalize
    path, filename, full_path = calc_path(title)

    if File.exists?(full_path)
      $stderr.puts "\t[error] Exists #{full_path}"
      exit 1
    end

    template = <<TEMPLATE
---
created_at: #{@ymd}
excerpt: 
kind: article
publish: true
tags: [misc]
title: "#{title.titleize}"
---

TEMPLATE

    FileUtils.mkdir_p(path) if !File.exists?(path)
    File.open(full_path, 'w') { |f| f.write(template) }
    $stdout.puts "\t[ok] Edit #{full_path}"
  end

  def calc_path(title)
    year, month_day = @ymd.split('-', 2)
    path = "content/" + year + "/" 
    filename = month_day + "-" + title.parameterize('_') + ".md"
    [path, filename, path + filename]
  end
end

