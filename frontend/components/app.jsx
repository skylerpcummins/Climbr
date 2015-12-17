var React = require('react');
var Navbar = require('./navbar');
var PhotoIndex = require('./photo_index');

var App = React.createClass({

  render: function () {
    console.log("in app");
    return (
      <div id="climbr">
        <div className="photo-index-pane">
          <Navbar />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
