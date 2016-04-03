var PostView = Backbone.View.extend({
  template: $('#post-template'),

  className: 'post',

  events: {
    'click .remove': 'removePost'
  },

  removePost: function () {
    // TODO: destroy the post model and remove the post view
  },

  render: function () {
    var template = Handlebars.compile(this.template.html());

    this.$el.append(template(this.model.toJSON()));

    return this;
  }
});