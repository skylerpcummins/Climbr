var React = require('react');
var AreasAutocomplete = require('./areas_autocomplete');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoActions = require('../actions/photo_actions');
var History = require('react-router').History;

var PhotoFields = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      title: "",
      description: "",
      area_name: "",
      url: this.props.location.state.url,
      user_id: window.current_user_id
    };
  },

  saveAndContinue: function(e) {
    e.preventDefault();

    PhotoActions.postUploadedPhoto(this.state);
    this.history.pushState(null, '/users/' + window.current_user_id, {});
  },

  render: function() {
    console.log(this.state);

    return (
      <div className="jumbotron-upload" >
        <form className="form-group">
          <div className="form-group">
            <label>Title
              <input className="form-control" type="text" valueLink={this.linkState("title")} />
            </label>
          </div>

          <div className="form-group">
            <label>Description
              <input className="form-control" type="text" valueLink={this.linkState("description")} />
            </label>
          </div>

          <div className="form-group">
            <label>Area
              <AreasAutocomplete valueLink={this.linkState("area_name")} />
            </label>
          </div>
        </form>

        <button className="btn btn-primary" onClick={this.saveAndContinue}>Upload!</button>
      </div>
    )
  }
});

module.exports = PhotoFields;
