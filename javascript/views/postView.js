var PostView = Backbone.View.extend({
  template: $('#post-template'),

  // every PostView will have a top level div with the class "post"
  className: 'post',

  events: {
    'click .remove': 'removePost'
  },

  removePost: function () {
    // TODO: 'destroy' the post model and 'remove' the post view
  },

  render: function () {
    var template = Handlebars.compile(this.template.html());

    // append the new HTML to our "el" (.post div)
    this.$el.append(template(this.model.toJSON()));

    return this;
  }
});