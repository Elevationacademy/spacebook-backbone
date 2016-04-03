var PostView = Backbone.View.extend({
  template: $('#post-template'),

  className: 'post',

  events: {
    'click .show-comments': 'toggleComments',
    'click .add-comment': 'addComment',
    'click .remove': 'removePost'
  },

  initialize: function () {
    // when a comment is added to this view's post model's 'comments' collection,
    // invoke render comment
    this.listenTo(this.model.get('comments'), 'add', this.renderComment);
  },

  toggleComments: function () {
    this.$el.find('.comments-container').toggleClass('show');
  },

  addComment: function () {
    // TODO: get the text of the comment and create a new CommentModel called comment
    // before the following

    this.model.get('comments').add(comment);
  },

  removePost: function () {
    // TODO: destroy the post model and remove the post view
  },

  renderComment: function (comment) {
    // create a new from the newly added comment model
    var view = new CommentView({ model: comment });

    // render and append the new commentView
    this.$el.find('.comments-list').append(view.render().el);
  },

  render: function () {
    var template = Handlebars.compile(this.template.html());

    this.$el.append(template(this.model.toJSON()));

    return this;
  }
});