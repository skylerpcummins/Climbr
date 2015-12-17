var React = require('react');
var ReactDOM = require('react-dom');
var PhotoStore = require('./stores/photo');
var ApiUtil = require('./util/api_util');
var PhotoIndex = require('./components/photo_index');
var Navbar = require('./components/navbar');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');
var UserIndex = require('./components/user_index');
var PhotoItem = require('./components/photo_item');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PhotoIndex} />
    <Route path="/users/:id" component={UserIndex} />
    <Route path="/api/photos/:id" component={PhotoItem} />
  </Route>
)

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router>{routes}</Router>,
      document.getElementById('content')
  );
});
