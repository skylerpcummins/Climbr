var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AreaConstants = require('../constants/area_constants');

var _areas = [];
var AreaStore = new Store(AppDispatcher);

var resetAreas = function(areas) {
  _areas = areas;
};

var addSingleArea = function(area) {
  var ids = []

  _areas.forEach(function(area) {
    ids.push(area.id)
  });

  if (ids.indexOf(area.id) === -1) {
    _areas.push(area)
  }
};

AreaStore.all = function() {
  return _areas.slice();
};

AreaStore.find = function(id) {
  return _areas.find(function(area) {
    return area.id === id
  });
};

AreaStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AreaConstants.AREAS_RECEIVED:
      resetAreas(payload.areas);
      AreaStore.__emitChange();
      break;
    case AreaConstants.AREA_RECEIVED:
      addSingleArea(payload.area);
      AreaStore.__emitChange();
      break;
  }
};

module.exports = AreaStore;
