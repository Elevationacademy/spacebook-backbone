var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click .add-post': 'addPost',
    'click .remove': 'removePost'
  },

  initialize: function () {
    this.listenTo(this.model.get('posts'), 'add', this.renderPost);
    this.$posts = this.$('.posts');
  },

  addPost: function (e) {
    e.preventDefault();

    var post = new PostModel( { text: $('#post-name').val() });

    this.model.get('posts').add(post);
  },

  renderPost: function (post) {
    var view = new PostView({ model: post });
    this.$posts.append(view.render().el);
  }
});