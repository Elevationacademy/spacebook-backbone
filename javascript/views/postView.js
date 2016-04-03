var PostView = Backbone.View.extend({
  template: $('#post-template'),

  className: 'post',

  events: {
    'click .show-comments': 'toggleComments',
    'click .add-comment': 'addComment',
    'click .remove': 'removePost'
  },

  initialize: function () {
    this.listenTo(this.model.get('comments'), 'add', this.renderComment, this);
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
    var view = new CommentView({ model: comment });
    this.$el.find('.comments-list').append(view.render().el);
  },

  render: function () {
    var template = Handlebars.compile(this.template.html());

    this.$el.append(template(this.model.toJSON()));

    return this;
  }
});