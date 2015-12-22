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
  },

  fetchAreas: function() {
    $.get(
      'api/areas',
      {},
      function(areas) {
        ApiActions.receiveAllAreas(areas);
    });
  },

  fetchSingleArea: function(id) {
    $.get(
      'api/areas/' + id,
      {},
      function(area) {
        ApiActions.receiveOneArea(area);
    });
  }
}

module.exports = ApiUtil;
