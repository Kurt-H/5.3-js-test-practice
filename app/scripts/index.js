var $ = require('jquery');
var PostView = require('./views.js');
var Post = require('./models.js');






$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  $( "#post-form" ).on('submit', function(event) {
   event.preventDefault();
   document.
  });


  Post.fetch();
});
