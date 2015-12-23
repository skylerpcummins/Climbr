var ApiUtil = require('../util/api_util');

AreaActions = {
  createArea: function(area) {
    ApiUtil.createArea(area);
  }
}

module.exports = AreaActions;
