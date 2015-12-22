var React = require('react');
var PhotoFields = require('./photo_fields');

var fieldValues = {
  title: null,
  description: null,
  areaId: null
}

var UploadForm = React.createClass({
  getInitialState: function() {
    return { step: 1 };
  },

  uploadPhoto: function() {
    //open cloudinary upload widget
  },

  saveValues: function(fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields)
    }();
  },

  nextStep: function() {
    this.setState({
      step: this.state.step + 1
    });
  }

  render: function() {
    switch(this.state.step) {
      case 1:
        return <PhotoFields fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
      case 2:
        this.uploadPhoto();
    }
  }
});

module.exports = UploadForm;
