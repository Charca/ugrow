define(['backbone'], function(Backbone) {
  var Router = Backbone.Router.extend({
    routes: {
      'user': 'user',
      'search/:query': 'search'
    },

    initialize: function() {
      Backbone.history.start();
    },

    user: function() {
      $('.prueba').html('User screen');
    },

    search: function(query) {
      $('.prueba').html('Search screen. Query:' + query);
    }
  });

  return Router;
});
