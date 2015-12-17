var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Masonry = require('react-masonry-component')(React);
var PhotoItem = require('./photo_item');
var History = require('react-router').History;

var masonryOptions = {
  transitionDuration: 0
};

var PhotoIndex = React.createClass({
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
    var photosGrid = this.state.photos.map( function(photo) {
      return (
        <div key={photo.id} onClick={this.showPhoto}>
          <img className="photo-index-image" id={photo.id} src={photo.photo_url} />
        </div>
      );
    }.bind(this));

    return (
        <Masonry
          options={masonryOptions}
          disableImagesLoaded={false}>
            {photosGrid}
        </Masonry>
    );
  }
});

module.exports = PhotoIndex;
