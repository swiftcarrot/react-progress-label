var React = require('react');
var ProgressLabel = require('../lib/progress-label');

var App = React.createClass({
  displayName: 'App',

  render() {
    return <ProgressLabel
      startDegree={60}
      endDegree={240}
      progressWidth={8}
      trackWidth={20}
      cornersWidth={4}
      size={400}
    />;
  }
});

React.render(<App/>, document.body);
