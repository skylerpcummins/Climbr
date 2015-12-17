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

PhotoStore.find = function(id) {
  return _photos.find(function(photo) {
    return photo.id === id
  });
};

PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED:
      resetPhotos(payload.photos);
      PhotoStore.__emitChange();
      break;
  }

  //might need another case for single photos later on
  //image doesnt show up after refreshing show page... need another store?
};

module.exports = PhotoStore;
