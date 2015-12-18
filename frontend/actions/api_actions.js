var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

ApiActions = {
  receiveAllPhotos: function(photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveOnePhoto: function(photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  }
}

module.exports = ApiActions;
