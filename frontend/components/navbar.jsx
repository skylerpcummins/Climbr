var React = require('react');
var PhotoStore = require('../stores/photo');
var PhotoActions = require('../actions/photo_actions');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],

  showUser: function() {
    this.history.pushState(null, '/users/' + window.current_user_id, {});
  },

  showAreaCreate: function() {
    this.history.pushState(null, '/api/areas/new', {});
  },

  showAreas: function() {
    this.history.pushState(null, '/api/areas', {});
  },

  showPhotoFields: function(uploadedPhoto) {
    this.history.pushState(uploadedPhoto, '/api/uploads', {});
  },

  signOut: function(e) {
    e.preventDefault();
    //put this in api_util
    $.ajax({
      url: "/session",
      method: "DELETE",
      success: function() {
        window.location = '/'
      }
    });
  },

  uploadPhoto: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) { this.showPhotoFields(results[0]) }
    }.bind(this));
  },

  render: function() {

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">climbr</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="show-user"><a onClick={this.showUser}>You<span className="sr-only">(current)</span></a></li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Explore <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li className="show-user"><a onClick={this.showAreas}>Show Areas</a></li>
                    <li className="show-user"><a onClick={this.showAreaCreate}>Create New Area</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="upload-button"><a onClick={this.uploadPhoto}>Upload</a></li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li className="show-user"><a onClick={this.signOut}>Sign Out</a></li>
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
