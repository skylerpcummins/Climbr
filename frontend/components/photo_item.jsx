var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Map = require('./map');
var AreaStore = require('../stores/area');
var History = require('react-router').History;

var PhotoItem = React.createClass({
  mixins: [History],

  getStateFromStore: function() {
    var vals = this.props.params.id.split(",");

    return { photo: PhotoStore.find(parseInt(vals[0])),
             area: AreaStore.find(parseInt(vals[1]))
           };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function(newProps) {
    var vals = newProps.params.id.split(",");

    ApiUtil.fetchSinglePhoto(parseInt(vals[0]));
    ApiUtil.fetchAreas();
  },

  componentWillUnmount: function() {
    this.photoItemToken.remove();
    this.areasToken.remove();
  },

  componentDidMount: function() {
    var vals = this.props.params.id.split(",");
    this.photoItemToken = PhotoStore.addListener(this._onChange);
    this.areasToken = AreaStore.addListener(this._onChange);
    ApiUtil.fetchSinglePhoto(vals[0]);
    ApiUtil.fetchAreas();
  },

  showArea: function(e) {
    this.history.pushState({area_id: this.state.area.id},
      'api/areas/' + this.state.area.id,
      {});
  },

  render: function() {
    if (typeof this.state.photo === 'undefined') { return <div></div>; }
    // if (typeof this.state.area === 'undefined') { return <div></div>; }
    var areaName = typeof this.state.area === 'undefined' ? "this photo has no associated area" : this.state.area.name

    return (
        <div className="container-fluid-show">
          <div className="container-map-photo">
            <div className="photo-description">
              <img className="photo-show"
                src={ this.state.photo.photo_url } />
              <div>
                Title: {this.state.photo.title}
              </div>
              <div className="photo-show-area" onClick={this.showArea}>
                Area: {areaName}
              </div>
            </div>
            <Map areaId={this.state.photo.area_id} />
          </div>
        </div>
    );
  }
});

module.exports = PhotoItem;
