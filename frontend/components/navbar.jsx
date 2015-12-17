var React = require('react');
var LogOutButton = require('./log_out_button');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],

  showUser: function() {
    this.history.pushState(null, '/users/' + window.current_user, {});
  },

  render: function() {

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Climbr</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="show-user"><a onClick={this.showUser}>You<span className="sr-only">(current)</span></a></li>
              <li><a href="#">Explore</a></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Upload</a></li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li>
                      <LogOutButton />
                    </li>
                  <li className="show-user"><a onClick={this.showUser}>Profile</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});

module.exports = Navbar;
