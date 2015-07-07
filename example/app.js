var React = require('react');
var ProgressLabel = require('../lib/progress-label');

var App = React.createClass({
  displayName: 'App',

  render() {
    var progress = 50;
    var textStyle = {
      'fill': '#ffffff',
      'textAnchor': 'middle'
    };

    return (
      <ProgressLabel
        progress={progress}
        startDegree={60}
        progressWidth={8}
        trackWidth={20}
        cornersWidth={4}
        size={400}
        fillColor="black"
        trackColor="red"
        progressColor="green">

        <text x="50" y="50" style={textStyle}>{`${progress}%`}</text>

      </ProgressLabel>
    );
  }
});

React.render(<App/>, document.body);
