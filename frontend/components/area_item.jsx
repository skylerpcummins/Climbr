var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Map = require('./map');
var History = require('react-router').History;
var Masonry = require('react-masonry-component')(React);

var AreaItem = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return { photos: PhotoStore.all() }
  },

  _updateState: function() {
    this.setState({
      photos: PhotoStore.all()
    });
  },

  componentWillUnmount: function() {
    this.photoToken.remove();
  },

  componentDidMount: function() {
    this.photoToken = PhotoStore.addListener(this._updateState);
    ApiUtil.fetchPhotos();
  },

  showPhoto: function(e) {
    this.history.pushState({photo_id: e.target.id}, '/api/photos/' + e.target.id, {});
  },

  render: function() {

    var areaPhotos = this.state.photos.filter(function(photo) {
      return photo.area_id === parseInt(this.props.params.id)
    }.bind(this));

    var photosGrid = areaPhotos.map(function(photo) {
      return (
        <div key={photo.id} onClick={this.showPhoto}>
          <img className="photo-index-image" id={[photo.id, photo.area_id]} src={photo.photo_url} />
        </div>
      );
    }.bind(this));

    return (
      <div className="areas-index-container">
        <div className="area-photos-map">
          <div className="areas-masonry">
            <Masonry className="photos-grid">
              {photosGrid}
            </Masonry>
          </div>
          <div className="map-fixed">
            <Map areaId={parseInt(this.props.params.id)}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AreaItem;
