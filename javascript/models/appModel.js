var AppModel = Backbone.Model.extend({
  defaults: {
    // think of this as our "posts" array
    posts: new PostsCollection()
  }
});