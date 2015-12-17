var React = require('react');
var Navbar = require('./navbar');

var App = React.createClass({

  render: function () {
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
