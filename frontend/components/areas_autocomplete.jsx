var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var AreasAutocomplete = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { inputVal: "" };
  },

  matchingAreas: function() {
    var matchingAreas = [];

    if (this.state.inputVal.length === 0){
      return this.props.names;
    }

    this.props.areas.forEach(function(area) {
      var sub = area.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matchingAreas.push(area);
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

    return (
      <div>
        <input className="form-control" type="text" valueLink={this.linkState("inputVal")} />
        <ul>
          {
            results.map(function(result, idx) {
              return <li key={idx} onClick={this.selectArea}>{result}</li>
            }.bind(this))
          }
        </ul>
      </div>
    );
  }

});

module.exports = AreasAutocomplete;
