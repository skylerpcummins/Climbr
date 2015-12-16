var React = require('react');
var ReactDOM = require('react-dom');
var PhotoStore = require('./stores/photo');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Index />,
      document.getElementById('content')
  );
});
