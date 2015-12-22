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
    var newCenter = {lat: currentArea.lat, lng: currentArea.lng};

    this.map.panTo(newCenter);

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
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.areaToken = AreaStore.addListener(this.onChange);
    ApiUtil.fetchAreas();
  },

  render: function() {
    return (
      <div className="map" ref="map">Map</div>
    );
  }
});

module.exports = Map;
