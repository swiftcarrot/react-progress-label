# react-progress-label
progress label component copied from [kirualex/KAProgressLabel](https://github.com/kirualex/KAProgressLabel) with svg

![screenshot](https://raw.githubusercontent.com/wangzuo/react-progress-label/gh-pages/screenshot.png)
### Installation
``` sh
npm install react-progress-label --save
```
### Demo
[http://wangzuo.github.io/react-progress-label/example/](http://wangzuo.github.io/react-progress-label/example/)
### Usage
``` javascript
var React = require('react');
var ProgressLabel = require('react-progress-label');

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

        <text x="200" y="200" style={textStyle}>{`${progress}%`}</text>

      </ProgressLabel>
    );
  }
});
```
### License
ISC
