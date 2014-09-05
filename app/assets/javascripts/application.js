// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var Instagram = {};

(function(){

 
  function toScreen(photos){

    // Using jQuery's generic iterator function:
    // jQuery.each http://api.jquery.com/jQuery.each/

    $.each(photos.data, function(index, photo){

      // I'll construct the image tag on the fly.
      // The images property contains objects representing images of
      // varying quality. I'll give low_resulution a try.

      photo = "<img src='"+ photo.images.low_resolution.url + "' />";

      $('div#photos-wrap').append(photo);
    });
  } 

  function search(tag){
  var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=ce5ace1b89a749edafede0f742ef1edb"
  $.getJSON(url, toScreen);
  }

  Instagram.search = search;
  })();

Instagram.search('puppy');
// puppy has to be a parameter from input field