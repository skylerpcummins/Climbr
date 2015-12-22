var React = require('react');

var PhotoFields = React.createClass({

  saveAndContinue: function(e) {
    e.preventDefault();

    var data = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
      areaId: this.refs.areaId.getDOMNode().value
    }

    this.props.saveValues(data);
    this.props.nextStep();
  },

  render: function() {
    return (
      <div>
        <label>Title</label>
        <input type="text" ref="title" defaultValue={this.props.fieldValues.title} />

        <label>Description</label>
        <input type="text" ref="description" defaultValue={this.props.fieldValues.description} />

        <label>Area</label>
        <input type="number" ref="areaId" defaultValue={this.props.fieldValues.areaId} />

        <button onClick={this.saveAndContinue}>Save and Continue</button>
      </div>
    )
  }
});

module.exports = PhotoFields;
