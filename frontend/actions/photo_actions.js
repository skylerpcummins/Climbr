var ApiUtil = require('../util/api_util');

PhotoActions = {
  postUploadedPhoto: function(photo) {
    ApiUtil.postPhoto(photo);
  }
}

module.exports = PhotoActions;
