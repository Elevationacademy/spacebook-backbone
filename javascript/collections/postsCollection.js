var PostsCollection = Backbone.Collection.extend({
  // this is to signify that our PostsCollection will be a collection
  // of PostModel(s)
  model: PostModel
});