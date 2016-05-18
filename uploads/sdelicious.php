<?php
# 
# Weekly del.icio.us for WordPress 1.2.x
#
# originally based on Stephen Eyre's dailydelicious
# (http://www.dot-totally.co.uk/dailydelicious.txt), 
# but changed quite a bit.

# 2006-05-30 Mike Waggoner <mike@herebox.org> ( http://herebox.org ) 
# merged the weekly and curl mods together, 
# for a weekly script without using fopen().
# 

# Elana Shenton (http://www.clampcampus.com) has modified this version 
# to use the CURL libraries rather than the fopen() libraries.  
# Additional improvements will be made and found at her website.
# The file can be found at http://www.clampcampus.com/plugins/yadd.txt
# Change the file extension to .php when you put it on your server.

# 2005-02-14  Marc Nozell  <marc@nozell.com>	1.0
#	* First version of a weekly entry
#	* Added a bunch of helpful comments for those who want to
#	  change the HTML formatting
#	* Includes patch from http://stratified.org/ to handle
#	  days/weeks with no del.icio.us bookmarks

#########################################################################
#
# See http://www.nozell.com/blog/ for the latest version of
# 'yet another weekly delicious' (yawd.php)
#
# USAGE:
# 
# 1) Edit the section below.  At the very least use your del.icio.us 
#    username and password ($del_user/$del_password)
# 
# 2) Put there file somewhere on the server where you run WordPress.
# 
# 3) Arrange for this page to be hit once a week, say 11:30ish on Sunday in your
#    local time.  del.icio.us seems to track UTC so depending on which
#    timezone you live in, some bookmarks from your yesterday may show
#    up.  Consider using a simple cronjob that looks like this:
#           30 23 * * 7       $HOME/bin/yawd.sh
#    where yawd.sh looks like this:
#	#!/bin/bash
#	curl http://www.yoursite.com/yawd.php
# 4) In the morning edit the entry if you wish.  I've tried to generate
#    pretty HTML so it will be simple to edit the entry.
# 
# THINGS TO KEEP IN MIND
# 
# Anyone that hits the URL for this script will cause your current
# bookmarks to be dumped into WordPress.  Clearly this is not
# desirable.
# 
# You have some options.  The easiest is to keep this URL 'secret'.
# Name it something unusual and put it in a non-obvious place.
# Remember that if you display your web hit stats, the url will be
# exposed.  A better solution to use .htaccess to limit access.  If
# you do that remember to update the url wget uses to include the
# username/password, something like this:
#  curl http://someuser:somepassword@www.yoursite.com/yawd.php
# 
# Enjoy,
# 
# -marc
#
#########################################################################

# Configure these:

$wp_path = '';			# Absolute path to WP installation, no trailing slash
$del_user = 'unthinkingly';					# del.icio.us username
$del_password = 'c242577581';				# del.icio.us username
$del_showlink = true;					# Show link to your del.icio.us page?
$wp_userid = 1;						# User ID to post in
$wp_catid = 33;						# Category to put daily del.icio.us links in
$wp_allowcomments = 'open';				# Allow comments on all links? (open or closed)
$wp_allowpings = 'open';				# Allow pingbacks on all links? (open or closed)
$wp_posttitle = 'This Week\'s Del.icio.us bookmarks from Chris';	# Title for your daily del.icio.us posts
$wp_postname = 'delicious-';				# Post name (for permalinks, etc)

# Stop configuring now!
     
# Still reading and want to change the look and feel of the posting?
# All the action is farther down in the function startElement. 

require_once($wp_path . '../wp-config.php');

function startElement($parser, $name, $attrs) {
  global $content;
  
  if ($name == "POSTS") {
    if (strlen($content) == 0) { 
# 
# First time through add the header saying whose bookmarks these are...
# 
# Newbie Note: The . means to join the strings together.
# 
# The HTML looks like this:
#  
#  Shared bookmarks for <a href="http://del.icio.us/">del.icio.us</a> user 
#      <a href="http://del.icio.us/MarcN"> MarcN</a>
#  <ul>
# 
# Note that the <ul> means the start of an unordered list.
# You can set $content to whatever you want.  For example, you want to keep the list, 
# but drop whose bookmarks they are, set it to this:
#    $ content = "<ul>\n";
# 
      $content = $content
	. "Shared bookmarks for <a href=\"http://del.icio.us/\">del.icio.us</a> user "
	. "\n<a href=\"http://del.icio.us/"
	. $attrs["USER"]
	. "\"> "
	. $attrs["USER"]
	. "</a>\n<ul>\n";
    }
  }
  else {

    global $empty;
    $empty = false;
# 
# This section is called for each bookmark.  It joins up to the end of the
# $contents some more HTML.  By default is is a list entry, but you may want to 
# change it, add DIV for formatting, whatever.
# 
# The HTML looks like this:
#  
#  <li><a href="http://example.com/" title="http://example.com/">Link title</a> -- 
#    Tagged as: [tag1 tag2]</li>
# 
    $content = $content . '    <li><a href="'
      . htmlspecialchars($attrs['HREF'])	// this is the URL of the bookmark
      . '" title="'
      . htmlspecialchars($attrs['HREF']) // The title you may have given it
      . '">' 
      . htmlspecialchars($attrs['DESCRIPTION'])  #
      . "</a> -- \n"
      . htmlspecialchars($attrs['EXTENDED'])
      . ' Tagged as: [' . htmlspecialchars($attrs['TAG']) . "]</li>\n";
  }
}


# Mostly just decoration while the del.icio.us XML is parsed...
function endElement($parser, $name)
{
   global $content;
   if ($name == "POSTS") {
     echo "done!<br>";
   }
}

# MAIN
# 

$empty = true;

# Get today, and make timestamp
$today = getdate();
$date = mktime(0,0,0,$today['mon'], $today['mday'], $today['year']);
# Get Dates for Post
$now = current_time('mysql');
$now_gmt = current_time('mysql', 1);


$content = "";			// collected HTML for the wp entry

## 
## Loop over the last 7 days gathering up the del.ico.us entries
## 
for ($i = 0; $i < 7; $i++) {
   
  $somedate  = mktime(0, 0, 0, date("m"),  date("d")-$i,  date("Y"));
  $dt = date("Y-m-d", $somedate);

	$url = "https://$del_user:$del_password@api.del.icio.us/v1/posts/get?dt=$dt"; 
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FRESH_CONNECT, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 25);
	curl_setopt($ch, CURLOPT_PORT, 80);
	$data = curl_exec($ch);
	$fp = $data;
	$errors = curl_error($ch);
	curl_close($ch);

	if ($errors != '') {
		die("CURL Error $errors");
	}

  print "Getting bookmarks for $dt...";
  sleep(1); 			// del.ici.ous API asks not to hammer them too fast
  
  $xml_parser = xml_parser_create();
  xml_set_element_handler($xml_parser, "startElement", "endElement");
  
  if (!xml_parse($xml_parser, $data, true)) {
       die(sprintf("XML error: %s at line %d",
                   xml_error_string(xml_get_error_code($xml_parser)),
                   xml_get_current_line_number($xml_parser)));
     }
  

  xml_parser_free($xml_parser);
} // end for loop for every day.

$content = $content . "</ul>";

print "This is what the entry will look like:<hr>";
print $content;
print "<hr>";

# check to see if there has been any posts at all.  If not don't create an entry in
# the wordpress database.

if ($empty)
     return;

# Build Query
$query  = "INSERT INTO $tableposts "
. "(`post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_status`, `comment_status`, `ping_status`, `post_name`, `post_modified`, `post_modified_gmt`) "
. "VALUES "
. "(" . $wp_userid . ", '" . $now . "', '" . $now_gmt . "', '" . addslashes($content) . "', '" . addslashes($wp_posttitle) . "', 'publish', '" . $wp_allowcomments . "', '" . $wp_allowpings . "', '" . $wp_postname . "', '" . $now . "', '" . $now_gmt . "');";

# Run Query
$wpdb->query($query);

# Get ID for category
$post_ID = $wpdb->get_var("SELECT ID FROM $tableposts ORDER BY ID DESC LIMIT 1");

# Build category query
$query = "INSERT INTO $tablepost2cat "
. "(`post_id`, `category_id`) "
. "VALUES "
. "('" . $post_ID . "', '" . $wp_catid . "');";

# Run Category Query
$wpdb->query($query);


?>
