var $ = require('jquery');
var handlebarsTemplate = require('../templates/application.hbs');



function PostView(){
  $('body').append('<ul class="posts">');
  $('body').append(handlebarsTemplate({'title':"Blog Posts", 'body':"Message"}));
}
PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title +
      '</h1><p>' + post.body + '</p></li>');
  });
};

module.exports = PostView;
