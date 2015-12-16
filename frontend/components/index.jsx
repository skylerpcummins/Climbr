var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({

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
  },

  render: function() {
    return (
      <div>Climbr Index!</div>
    );
  }

});

module.exports = Index;
