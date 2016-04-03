var CommentView = Backbone.View.extend({
  template: $('#comment-template'),

  events: {
    'click .remove-comment': 'removeComment'
  },

  removeComment: function () {
    // TODO: Destroy the comment model
    // TODO: Remove the comment view
  },

  render: function () {
    var template = Handlebars.compile(this.template.html());

    this.$el.append(template(this.model.toJSON()));
  }
});