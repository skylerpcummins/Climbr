var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

var _photos = [];
var PhotoStore = new Store(AppDispatcher);

var resetPhotos = function(photos) {
  _photos = photos;
};

var addSinglePhoto = function(photo) {
  var ids = []

  _photos.forEach(function(photo) {
    ids.push(photo.id)
  });

  if (ids.indexOf(photo.id) === -1) {
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
      PhotoStore.__emitChange();
      break;
    case PhotoConstants.PHOTO_RECEIVED:
      addSinglePhoto(payload.photo);
      PhotoStore.__emitChange();
      break;
  }  
};

module.exports = PhotoStore;
