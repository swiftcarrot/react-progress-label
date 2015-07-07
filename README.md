# react-progress-label
progress label component inspired by [kirualex/KAProgressLabel](https://github.com/kirualex/KAProgressLabel) with svg
### Installation
``` sh
npm install react-progress-label --save
```
### Example
``` javascript
var React = require('react');
var ProgressLabel = require('react-progress-label');

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
```
### License
ISC
