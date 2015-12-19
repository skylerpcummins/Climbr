var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Masonry = require('react-masonry-component')(React);
var History = require('react-router').History;

var UserIndex = React.createClass({
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
    this.userPhotoToken.remove();
  },

  componentDidMount: function() {
    this.userPhotoToken = PhotoStore.addListener(this._updateState);
    ApiUtil.fetchPhotos(window.current_user_id);
  },

  showPhoto: function(e) {
    this.history.pushState({photo_id: e.target.id}, '/api/photos/' + e.target.id, {});
  },

  render: function() {
    var photosGrid = this.state.photos.map( function(photo) {
      return (
        <div key={photo.id} onClick={this.showPhoto}>
          <img className="user-index-image" id={photo.id} src={photo.photo_url} />
        </div>
      );
    }.bind(this));

    return (
      <div>
        <div className="cover-photo">
          <div className="user-show-email">{window.current_user_email}</div>
        </div>
        <Masonry>{photosGrid}</Masonry>
      </div>
      );
  }
});

module.exports = UserIndex;
