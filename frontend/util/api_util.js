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
    $.get(
      '/api/photos/' + id,
      {},
      function(photo) {
        ApiActions.receiveOnePhoto(photo);
    });
  },

  postPhoto: function(photo) {
    var data = {
      photo: {
        title: "placeholder for now",
        photo_url: photo.url,
        user_id: window.current_user_id
      }
    };
    $.post('/api/photos',
      data,
      function(savedPhoto) {
        ApiActions.receiveOnePhoto(savedPhoto);
    });
  }
}

module.exports = ApiUtil;
