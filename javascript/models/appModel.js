var AppModel = Backbone.Model.extend({
  defaults: {
    posts: new PostsCollection()
  }
});