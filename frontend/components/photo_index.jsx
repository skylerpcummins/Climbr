var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var PhotoIndexItem = require('./photo_index_item')
var ComponentGallery = require('react-component-gallery');

var PhotoIndex = React.createClass({

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

  render: function() {
    var photosGrid = this.state.photos.map( function(photo) {
      return (
        <img src={photo.photo_url} />
      )
    });

    return (
      <div>
        <ComponentGallery
          className="photos-index"
          margin={10}
          noMarginBottomOnLastRow={true}
          targetWidth={400}>
            {photosGrid}
        </ComponentGallery>

      </div>
    );
  }

});

module.exports = PhotoIndex;
