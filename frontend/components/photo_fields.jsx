var React = require('react');

var PhotoFields = React.createClass({

  saveAndContinue: function(e) {
    e.preventDefault();

    // need to add photourl to this data
    var data = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
      areaId: this.refs.areaId.getDOMNode().value
    }

    //PhotoActions.postUploadedPhoto(data)
  },

  render: function() {

    console.log(this.props.location.state.url);

    return (
      <div className="jumbotron-upload" >
        <form className="form-group">
          <div className="form-group">
            <label>Title
              <input className="form-control" type="text" ref="title" />
            </label>
          </div>

          <div className="form-group">
            <label>Description
              <input className="form-control" type="text" ref="description" />
            </label>
          </div>

          <div className="form-group">
            <label>Area
              <input className="form-control" type="number" ref="areaId" />
            </label>
          </div>
        </form>

        <button className="btn btn-primary" onClick={this.saveAndContinue}>Upload!</button>
      </div>
    )
  }
});

module.exports = PhotoFields;
