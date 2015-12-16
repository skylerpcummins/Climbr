var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

var _photos = [];
var PhotoStore = new Store(AppDispatcher);

var resetPhotos = function(photos){
  _photos = photos;
};

PhotoStore.all = function() {
  return _photos.slice();
};

PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED:
      resetPhotos(payload.photos);
      PhotoStore.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
