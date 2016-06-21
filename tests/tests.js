var expect = chai.expect;
var $ = require('jquery');
var Post = require('../app/scripts/models');
var PostView = require('../app/scripts/views');

/**
 * Write some tests to test the Post Model
 */
describe('Post', function(){
  describe("fetch", function(){

    it("should return a promise", function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it("should resolve with an array of posts", function(done){
      Post.fetch().then(function(posts){
        var firstPost = posts[0];
        expect(firstPost).to.have.property('title');
        expect(firstPost).to.have.property('body');
        expect(firstPost).to.have.property('_id');
        // expect(firstPost).to.have.property('created_at');
        done();
      });
    });

    it("should trigger a posts:fetched event", function(done){

      $(document).on('posts:fetched', function(event, posts){
        expect(posts).to.be.an.instanceof(Array);
        done();
      });

      Post.fetch();
    });
  });
});

// PUT YOUR TESTS HERE!!!
describe('create post form', function(){
  it('should trigger a create:post event on the document with the title and body', function(done){
    //var view = new PostView();
    $(document).on('create:post', function(event, data){
      done();
      //tests go here

      expect(data).to.have.property('title');
      expect(data).to.have.property('body');
      expect(data.title).to.equal('Cool');
      expect(data.body).to.equal('Cooler');
    });
    $('#post-form').submit();
    $('.input-class-name').val('title');
    $('.input-class-name').val('body');

     $(document).trigger('crate:post', [{'title': 'Cool', 'body': 'Cooler'}]);

  });

});
