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
    console.log(this.state);

    return (
      <div className="jumbotron-upload">
        <Map clickHandler={this.setCoords}/>
        <h5>Add information about this area...</h5>
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
        </form>

        <button className="btn btn-primary"
          onClick={this.createArea}>Create Area!
        </button>

      </div>
    )
  }
});

module.exports = AreaForm;
