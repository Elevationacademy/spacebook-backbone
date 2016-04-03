var PostModel = Backbone.Model.extend({
  defaults: {
    text: "",

    comments: []
  },

  initialize: function () {
    this.set('comments', new CommentsCollection())
  }
});
