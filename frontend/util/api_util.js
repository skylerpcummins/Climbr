var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchPhotos: function(id) {
    $.get(
      'api/photos',
      {user_id: id},
      function(photos){
        ApiActions.receiveAllPhotos(photos);
    });
  }
}

module.exports = ApiUtil;
