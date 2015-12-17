var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchPhotos: function(id) {
    $.get(
      'api/photos',
      {user_id: id},
      function(photos){
        ApiActions.receiveAllPhotos(photos);
    });
  },

  fetchSinglePhoto: function(id) {
    $.ajax({
      url: 'api/photos/' + id,
      data: {photo_id: id},
      success: function(photo) {
        ApiActions.receiveSinglePhoto(photo);
      }
    });
  }
}

module.exports = ApiUtil;
