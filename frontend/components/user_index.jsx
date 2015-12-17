var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Masonry = require('react-masonry-component')(React);

var masonryOptions = {
  transitionDuration: 0
};

var UserIndex = React.createClass({

  getInitialState: function() {
    return { photos: PhotoStore.all() }
  },

  _updateState: function() {
    this.setState({
      photos: PhotoStore.all()
    });
  },

  componentWillUnmount: function() {
    this.userPhotoToken.remove();
  },

  componentDidMount: function() {
    this.userPhotoToken = PhotoStore.addListener(this._updateState);
    ApiUtil.fetchPhotos(window.current_user);
  },

  render: function() {
    console.log("in user index");
    var photosGrid = this.state.photos.map( function(photo) {
      return (
        <div key={photo.id}>
          <img src={photo.photo_url} />
        </div>
      );
    });

    return (
        <Masonry
          options={masonryOptions}
          disableImagesLoaded={false}>
            {photosGrid}
        </Masonry>
    );
  }
});

module.exports = UserIndex;
