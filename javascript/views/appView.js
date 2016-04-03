var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click .add-post': 'addPost',
    'click .remove': 'removePost'
  },

  // initialize get's called as soon as this componenet is constructed
  initialize: function () {
    // when a new post is added the the appModel's 'posts' collection,
    // invoke render
    this.listenTo(this.model.get('posts'), 'add', this.renderPost);

    this.$posts = this.$('.posts');
  },

  addPost: function (e) {
    e.preventDefault();

    // create a new post model
    var post = new PostModel( { text: $('#post-name').val() });

    // add the new post model to the appModel's 'posts' collection
    this.model.get('posts').add(post);
  },

  renderPost: function (post) {
    // create a new from the newly added post model
    var view = new PostView({ model: post });

    // render and append the new postView
    this.$posts.append(view.render().el);
  }
});