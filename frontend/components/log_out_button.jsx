var React = require('react');

var LogOutButton = React.createClass({

  render: function() {
    return (
      <form className="button_to" method="post" action="http://localhost:3000/session">
        <input type="hidden" name="_method" value="delete" />
        <input type="submit" value="Log Out" />
        <input type="hidden" name="authenticity_token" value={ $('meta[name="csrf-token"]').attr('content') } />
      </form>
    );
  }
});

module.exports = LogOutButton;
