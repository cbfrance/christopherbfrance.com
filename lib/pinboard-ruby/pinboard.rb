require 'rubygems'
require 'httparty'

class Pinboard
  include HTTParty
  base_uri 'https://api.pinboard.in/v1'

  def initialize(auth)
    @auth = auth
  end

  def getPosts(options={})
    apiData = { :basic_auth=>@auth }
    apiData.merge!(options)
    self.class.get('/posts/get', apiData)
  end

  def recentPosts(options={})
    apiData = { :basic_auth=>@auth }
    apiData.merge!(options)
    self.class.get('/posts/recent', apiData)
  end

  def addPost(u, d, options={})
    apiQuery = {:url=>u, :description=>d}.merge(options)
    apiData = { :basic_auth=>@auth, :query=>apiQuery }
    self.class.get('/posts/add', apiData)
  end

  def deletePost(url)
    apiQuery = { :url=>url }
    apiData = { :basic_auth=>@auth, :query=>apiQuery }
    self.class.get('/posts/delete', apiData)
  end

  def getDates(tag='')
    if(tag.strip.empty?)
      apiData = { :basic_auth=>@auth, :query=>{:tag=>tag} }
    else
      apiData = { :basic_auth=>@auth }
    end

    self.class.get('/posts/delete', apiData)
  end

  def allPosts()
    #TODO
  end
    
  def getHashes
    apiData = { :basic_auth=>@auth, :query=>{:hashes} }
    self.class.get("/posts/all?hashes", apiData)
  end
  
  def suggestPosts(url='')
    if(url.strip.empty?)
      apiData = { :basic_auth=>@auth, :query=>{:url=>url} }
    else
      apiData = { :basic_auth=>@auth }
    end

    self.class.get('/posts/suggest', apiData)
  end

  def getTags()
    #TODO
  end

  def renameTag()
    #TODO
  end

  def deleteTag()
    #TODO
  end

  def getTagBundles()
    #TODO
  end

  def assignTagsToBundle()
    #TODO
  end

  def deleteBundle()
    #TODO
  end
    
end

puts "Enter Pinboard.in username: "
u = gets.chomp
puts "and the password: "
p = gets.chomp
puts "Let me process"
pb = Pinboard.new(:username=>u, :password=>p)
puts "******************"
puts "**** NEW POSTS ****"
puts "******************"
puts pb.getHashes
