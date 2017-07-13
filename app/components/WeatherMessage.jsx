var React = require('react');

var WeatherMessage = React.createClass({

  render: function() {
    var { temp, location } = this.props;
    return (
      <h3>A temperatura em { location } está em { temp } graus.</h3>
    );
  }
});

module.exports = WeatherMessage;
