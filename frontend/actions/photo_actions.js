//call util function that does postphoto
var ApiUtil = require('../util/api_util');

PhotoActions = {
  postUploadedPhoto: function(photo) {
    ApiUtil.postPhoto(photo);
  }
}

module.exports = PhotoActions;
