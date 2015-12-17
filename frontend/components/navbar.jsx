var React = require('react');

var Navbar = React.createClass({

  render: function() {

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Climbr</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#link to window.current_user url thingy">You<span className="sr-only">(current)</span></a></li>
              <li><a href="#">Explore</a></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Upload</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li>
                      <form className="button_to" method="post" action="http://localhost:3000/session">
                        <input type="hidden" name="_method" value="delete" />
                        <input type="submit" value="Log Out" />
                        <input type="hidden" name="authenticity_token" value={ $('meta[name="csrf-token"]').attr('content') } />
                      </form>
                    </li>
                  <li><a href="#">Profile</a></li>
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
