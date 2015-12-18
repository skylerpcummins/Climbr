var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

var _photos = [];
var PhotoStore = new Store(AppDispatcher);

var resetPhotos = function(photos) {
  _photos = photos;
};

var addSinglePhoto = function(photo) {
  if (_photos.indexOf(photo) === -1) {
    _photos.push(photo);
  }
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
      break;
    case PhotoConstants.PHOTO_RECEIVED:
      addSinglePhoto(payload.photo);
      break;
  }

  //might need another case for single photos later on
  //image doesnt show up after refreshing show page... need another store?
  PhotoStore.__emitChange();
};

module.exports = PhotoStore;
