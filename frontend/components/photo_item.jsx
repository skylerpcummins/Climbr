var React = require('react');
var PhotoStore = require('../stores/photo');
var ApiUtil = require('../util/api_util');
var Map = require('./map');

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
    if (typeof this.state.photo === 'undefined') { return <div></div>; }

    return (
        <div className="container-fluid-show">
          <div className="container-map-photo">
            <img className="img-responsive" src={ this.state.photo.photo_url } />
            <Map areaId={this.state.photo.area_id} />
          </div>
        </div>
    );
  }
});

module.exports = PhotoItem;
