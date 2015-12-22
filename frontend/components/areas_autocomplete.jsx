var React = require('react');
var ApiUtil = require('../util/api_util');
var AreaStore = require('../stores/area');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var AreasList = [];
var AreaNames = [];

var AreasAutocomplete = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    return {
      inputVal: "",
      areas: AreaStore.all()
    };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    this.areasToken = AreaStore.addListener(this._onChange);
    ApiUtil.fetchAreas();
  },

  componentWillUnmount: function() {
    this.areasToken.remove();
  },

  matchingAreas: function() {
    var matchingAreas = [];

    if (this.state.inputVal.length === 0){
      return this.state.areas.map(function(area) {
        return area.name;
      });
    }

    this.state.areas.forEach(function(area) {
      var sub = area.name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matchingAreas.push(area.name);
      }
    }.bind(this));

    if (matchingAreas.length === 0) {
      matchingAreas.push("No areas match your search.");
    }

    return matchingAreas;
  },

  selectArea: function(e) {
    var area = e.currentTarget.innerText;
    this.setState({ inputVal: area });
  },

  render: function() {
    var results = this.matchingAreas();

    var matchedAreas = results.map(function(result, idx) {
      return (
        <li className="areas-list" key={idx} onClick={this.selectArea}>{result}</li>
      );
    }.bind(this));

    return (
      <div>
        <input className="form-control" type="text" valueLink={this.linkState("inputVal")} />
        <ul>{matchedAreas}</ul>
      </div>
    );
  }

});

module.exports = AreasAutocomplete;
