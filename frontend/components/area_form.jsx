var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var Map = require('./map');
var AreaActions = require('../actions/area_actions');

var AreaForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      name: "",
      description: "",
      lat: 0,
      lng: 0
    };
  },

  createArea: function(e) {
    e.preventDefault();

    AreaActions.createArea(this.state);
    this.history.pushState(null, '/api/areas', {});
  },

  setCoords: function(pos) {
    this.setState({
      lat: pos.lat,
      lng: pos.lng
    })
  },

  render: function() {

    return (
      <div className="jumbotron-upload">
        <div className="map-form">
          <Map clickHandler={this.setCoords}/>
        </div>
        <br />
        <h5>Click on the map to set the location of your area...</h5>
        <form className="form-group">
          <div className="form-group">
            <label>Area Name
              <input className="form-control"
                type="text"
                valueLink={this.linkState("name")}/>
            </label>
          </div>

          <div className="form-group">
            <label>Area Description
              <input className="form-control"
                type="text"
                valueLink={this.linkState("description")}/>
            </label>
          </div>

          <div>
            Current Coordinates: {this.state.lat}, {this.state.lng}
          </div>
        </form>

        <button className="btn btn-primary"
          onClick={this.createArea}>Create Area!
        </button>

      </div>
    )
  }
});

module.exports = AreaForm;
