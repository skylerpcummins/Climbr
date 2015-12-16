var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchPhotos: function(photos) {
    $.get('api/photos', {}, function(photos){
      ApiActions.receiveAllPhotos(photos);
    });
  }
}

module.exports = ApiUtil;
