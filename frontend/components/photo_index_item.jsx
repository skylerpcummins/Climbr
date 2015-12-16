var React = require('react');

var PhotoIndexItem = React.createClass({

  render: function() {

    return (
      <div className="photo-index-item">
        {this.props.photo.title + ",\n" + this.props.photo.photo_url}
      </div>
    );
  }

});

module.exports = PhotoIndexItem;
