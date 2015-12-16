var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Masonry = require('react-masonry-component')(React);
var Navbar = require('./navbar');

var masonryOptions = {
  transitionDuration: 0
};

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
        <div>
          <img src={photo.photo_url} />
        </div>
      );
    });

    return (
      <body>
        <Navbar />
        <Masonry
          options={masonryOptions}
          disableImagesLoaded={false}>
            {photosGrid}
        </Masonry>
      </body>
    );
  }
});

module.exports = PhotoIndex;
