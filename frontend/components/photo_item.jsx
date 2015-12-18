var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');

var PhotoItem = React.createClass({

  getStateFromStore: function() {
    return { photo: PhotoStore.find(parseInt(this.props.params.id)) };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSinglePhoto(parseInt(newProps.params.id));
  },

  componentWillUnmount: function() {
    this.photoItemToken.remove();
  },

  componentDidMount: function() {
    this.photoItemToken = PhotoStore.addListener(this._onChange);
    ApiUtil.fetchSinglePhoto(this.props.params.id);
  },

  render: function() {
    if (this.state.photo === undefined) { return <div></div>; }

    return (
      <div className="container-photo-item">
        <img className="photo-item" src={ this.state.photo.photo_url } />
      </div>
    );
  }
});

module.exports = PhotoItem;
