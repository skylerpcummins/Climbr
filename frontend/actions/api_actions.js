var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var AreaConstants = require('../constants/area_constants');

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
  },

  receiveAllAreas: function(areas) {
    AppDispatcher.dispatch({
      actionType: AreaConstants.AREAS_RECEIVED,
      areas: areas
    });
  },

  receiveOneArea: function(area) {
    AppDispatcher.dispatch({
      actionType: AreaConstants.AREA_RECEIVED,
      area: area
    });
  }
}

module.exports = ApiActions;
