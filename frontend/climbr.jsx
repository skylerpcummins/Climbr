var React = require('react');
var ReactDOM = require('react-dom');
var PhotoStore = require('./stores/photo');
var ApiUtil = require('./util/api_util');
var PhotoIndex = require('./components/photo_index');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <PhotoIndex />,
      document.getElementById('content')
  );
});