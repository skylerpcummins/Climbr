var React = require('react');
var AreasAutocomplete = require('./areas_autocomplete');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoActions = require('../actions/photo_actions');
var AreaStore = require('../stores/area');
var History = require('react-router').History;

var PhotoFields = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      title: "",
      description: "",
      area_id: "",
      url: this.props.location.state.url,
      user_id: window.current_user_id
    };
  },

  saveAndContinue: function(e) {
    e.preventDefault();

    this.state.area_id = AreaStore.findByName(this.state.area_id).id;

    PhotoActions.postUploadedPhoto(this.state);
    this.history.pushState(null, '/users/' + window.current_user_id, {});
  },

  handleInput: function(areaName) {
    this.setState({ area_id: areaName });
  },

  render: function() {

    return (
      <div className="jumbotron-upload" >
        <img className="upload-preview" src={this.state.url} />
        <h5>Add more information about your photo...</h5>
        <form className="form-group">
          <div className="form-group">
            <label>Title
              <input className="form-control"
                type="text"
                valueLink={this.linkState("title")} />
            </label>
          </div>

          <div className="form-group">
            <label>Description
              <input className="form-control"
                type="text"
                valueLink={this.linkState("description")} />
            </label>
          </div>

          <div className="form-group">
            <label>Area
              <AreasAutocomplete
                handleInput={this.handleInput}
                value={this.state.inputVal} />
            </label>
          </div>
        </form>

        <button className="btn btn-primary"
          onClick={this.saveAndContinue}>Upload!
        </button>
      </div>
    )
  }
});

module.exports = PhotoFields;
