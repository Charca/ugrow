define(['backbone', 'app/joke.model'], function(Backbone, JokeModel) {
  var UserView = Backbone.View.extend({
    el: $('.container'),
    template: _.template($('#my-template').html()),
    initialize: function() {
      this.model = new JokeModel();
      this.listenTo(this.model, 'change', this.render);
      this.model.fetch();
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return UserView;
});
