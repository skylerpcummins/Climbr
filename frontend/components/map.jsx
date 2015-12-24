var React = require('react');
var ReactDOM = require('react-dom');
var AreaStore = require('../stores/area');
var ApiUtil = require('../util/api_util');

var allMarkers = [];

var Map = React.createClass({

  onChange: function() {
    var currentMarkers = [];

    AreaStore.all().forEach(function(area) {
      var pos = { lat: area.lat, lng: area.lng };

      var marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: area.name
      });

      allMarkers.push(marker);
      currentMarkers.push(marker);
    }.bind(this));

    var currentArea = AreaStore.find(this.props.areaId);

    if (typeof currentArea != 'undefined') {
      var newCenter = {lat: currentArea.lat, lng: currentArea.lng};
      this.map.panTo(newCenter);
      this.map.setZoom(11);
    }

    this._removeMarkers(currentMarkers);
  },

  _removeMarkers: function(currentMarkers) {
    allMarkers.forEach(function(marker, idx) {
      if (currentMarkers.indexOf(marker) === -1) {
        allMarkers.splice(idx, 1);
        marker.setMap(null);
      }
    });
  },

  componentWillUnmount: function() {
    this.areaToken.remove();
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 39, lng: -101.3},
      zoom: 3
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.areaToken = AreaStore.addListener(this.onChange);
    this.clickToken = this.map.addListener('click', this._getPositionFromClick);
    ApiUtil.fetchAreas();
  },

  _getPositionFromClick: function(e) {
    var pos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    if (typeof this.props.clickHandler != 'undefined') {
      this.props.clickHandler(pos)
    }
  },

  render: function() {
    return (
      <div className="map" ref="map">Map</div>
    );
  }
});

module.exports = Map;
