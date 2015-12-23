var React = require('react');
var AreaStore = require('../stores/area');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Masonry = require('react-masonry-component')(React);
var Map = require('./map');
var History = require('react-router').History;

var AreasIndex = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return { areas: AreaStore.all(),
            photos: PhotoStore.all() }
  },

  _updateState: function() {
    this.setState({
      areas: AreaStore.all(),
      photos: PhotoStore.all(0)
    });
  },

  componentWillUnmount: function() {
    this.areasToken.remove();
    this.photosToken.remove();
  },

  componentDidMount: function() {
    this.areasToken = AreaStore.addListener(this._updateState);
    this.photosToken = PhotoStore.addListener(this._updateState);
    ApiUtil.fetchAreas();
    ApiUtil.fetchPhotos();
  },

  showArea: function(e) {
    this.history.pushState({area_id: e.target.id}, 'api/areas/' + e.target.id, {});
  },

  render: function() {
    var areasGrid = this.state.areas.map(function(area) {

      if (typeof PhotoStore.findAreaPhoto(area.id) != 'undefined') {
        return (
          <div key={area.id} onClick={this.showArea}>
            <img className="user-index-image"
              id={area.id}
              src={PhotoStore.findAreaPhoto(area.id).photo_url} />
            <div className="area-title">{area.name}</div>
          </div>
        );
      }
    }.bind(this));

    return (
      <div className="areas-index-container">
        <div className="area-photos-map">
          <div className="areas-masonry">
            <Masonry>{areasGrid}</Masonry>
          </div>
          <Map />
        </div>
      </div>
    );
  }

});

module.exports = AreasIndex;
