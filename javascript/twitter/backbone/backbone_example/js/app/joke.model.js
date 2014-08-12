define(['backbone'], function(Backbone) {
  var JokeModel = Backbone.Model.extend({
    url: 'http://api.icndb.com/jokes/43'
  });

  return JokeModel;
});
