include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::Blogging
require 'time'
require 'fileutils'

# Hyphens are converted to sub-directories in the output folder. 
def route_path(item)
  if item.identifier.include?('-')
    item.identifier.split('-').join('/').chop + '.html' # /2010/01/01-some_title.haml -> /2010/01/01/some_title.html
  else
    item.identifier + 'index.html'                      # /2010/ => /2010/index.html
  end
end

# Creates in-memory tag pages from partial: layouts/_tag_page.haml
def create_tag_pages
  tag_set(items).each do |tag|
    items << Nanoc3::Item.new(
      "= render('_tag_page', :tag => '#{tag}')", # use locals to pass data
      { :title => "Category: #{tag}"},      # attributes
      "/tags/#{tag}/"                        # identifier
    )
  end
end



# Dates may be encoded in the filename instead of the meta section at the top of each file.
def add_missing_info
  items.each do |item|
    if item[:file]
      # nanoc3 >= 3.1 will have this feature, add for older versions
      item[:extension] ||= item[:file].path.match(/\..*$/)[0]
    end
    next if item[:kind] != "article"
    item[:created_at] ||= derive_created_at(item)
    # sometimes nanoc3 stores created_at as Date instead of String causing a bunch of issues
    item[:created_at] = item[:created_at].to_s if item[:created_at].is_a?(Date)
  end
end


def partial(identifier_or_item)
  item = !item.is_a?(Nanoc3::Item) ? identifier_or_item : item_by_identifier(identifier_or_item)
  item.compiled_content(:snapshot => :pre) 
end

def item_by_identifier(identifier)
  items ||= @items
  items.find { |item| item.identifier == identifier }
end

#=> { 2010 => { 12 => [item0, item1], 3 => [item0, item2]}, 2009 => {12 => [...]}}
def articles_by_year_month
  result = {}
  current_year = current_month = year_h = month_a = nil

  sorted_articles.each do |item|
    d = Date.parse(item[:created_at])
    if current_year != d.year
      current_month = nil
      current_year = d.year
      year_h = result[current_year] = {}
    end

    if current_month != d.month
      current_month = d.month
      month_a = year_h[current_month] = [] 
    end

    month_a << item
  end

  result
end

def is_front_page?
    @item.identifier == '/'
end


def n_newer_articles(n, reference_item)
  @sorted_articles ||= sorted_articles
  index = @sorted_articles.index(reference_item)
  
  # n = 3, index = 4
  if index >= n
    @sorted_articles[index - n, n]
  elsif index == 0
    []
  else # index < n
    @sorted_articles[0, index]
  end
end


def n_older_articles(n, reference_item)
  @sorted_articles ||= sorted_articles
  index = @sorted_articles.index(reference_item)
  
  # n = 3, index = 4, length = 6
  length = @sorted_articles.length
  if index < length
    @sorted_articles[index + 1, n]
  else
    []
  end
end


def pretty_time(time)
  Time.parse(time).strftime("%b %d, %Y") if !time.nil?
end

def featured_count
  @config[:featured_count].to_i
end

def excerpt_count
  @config[:excerpt_count].to_i
end

def disqus_shortname 
  @config[:disqus_shortname]
end

def to_month_s(month)
  Date.new(2010, month).strftime("%B")
end

private

def derive_created_at(item)
  parts = item.identifier.gsub('-', '/').split('/')[1,3]
  date = '1980/1/1'
  begin
    Date.strptime(parts.join('/'), "%Y/%m/%d")
    date = parts.join('/')
  rescue
  end
  date
end