require.config({
  paths: {
    'jquery': 'vendor/jquery',
    'backbone': 'vendor/backbone',
    'underscore': 'vendor/underscore'
  }
});

require(['app/user.view', 'app/router'], function(UserView, Router) {
  var App = new Router();
  var myView = new UserView();
});
