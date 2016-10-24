require "pry"

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

page '/*.markdown', layout: "layout_post"

# Preserve old links when the title changes
# 
proxy "/2007/12/02/move-to-san-francisco-now.html", "/2007-12-02-move-to-san-francisco.html"

# Handle paths that end with a slash instead of .html
activate :directory_indexes

set :markdown, :tables => true, :autolink => true, :gh_blockcode => true, :fenced_code_blocks => true
set :markdown_engine, :redcarpet

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  # blog.sources = "{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 100
  blog.page_link = "page/{num}"
end

# page "/feed.xml", layout: false

page "/all.html"

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
helpers do

  # Tag weight
  # 
  # Calculate how dark a tag should be based on how many times it is used.
  def tag_weight(count)
    case count
      when 0..3 then return "light"
      when 4..8 then return "medium"
      when 9..100 then return "heavy"
      else
        return "none"
    end
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
