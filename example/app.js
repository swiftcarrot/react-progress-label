require('react-input-color/lib/input-color.less');
require('react-input-slider/lib/input-slider.less');

var React = require('react');
var ProgressLabel = require('../lib/progress-label');
var Color = require('react-input-color');
var Slider = require('react-input-slider');

var textStyle = {
 'fill': '#ffffff',
 'textAnchor': 'middle'
};

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      startDegree: 60,
      progress: 50,
      progressWidth: 8,
      trackWidth: 20,
      cornersWidth: 4,
      size: 300,
      fillColor: '#000000',
      trackColor: '#ff0000',
      progressColor: '#00ff00'
    };
  },

  renderSlider(name, min, max) {
    return (
      <div>
        <span>{name}</span>
        <Slider
          className="slider slider-x"
          x={this.state[name]}
          xmin={min}
          xmax={max}
          onChange={this.handleSliderChange.bind(null, name)}
        />
      </div>
    );
  },

  renderColor(name) {
    return (
      <div>
        <span>{name}</span>
        <Color
          value={this.state[name]}
          onChange={this.handleColorChange.bind(null, name)}
        />
      </div>
    );
  },

  render() {
    return (
      <div className="app">
        <ProgressLabel
          progress={this.state.progress}
          startDegree={this.state.startDegree}
          progressWidth={this.state.progressWidth}
          trackWidth={this.state.trackWidth}
          cornersWidth={this.state.cornersWidth}
          size={this.state.size}
          fillColor={this.state.fillColor}
          trackColor={this.state.trackColor}
          progressColor={this.state.progressColor}>

          <text x="50" y="50" style={textStyle}>{`${parseInt(this.state.progress, 10)}%`}</text>
        </ProgressLabel>

        <div className="controls">
          {this.renderSlider('progress', 0, 100)}
          {this.renderSlider('startDegree', 0, 360)}
          {this.renderSlider('progressWidth', 1, 20)}
          {this.renderSlider('trackWidth', 1, 30)}
          {this.renderSlider('cornersWidth', 1, 20)}
          {this.renderSlider('size', 100, 400)}
          {this.renderColor('fillColor', this.state.fillColor)}
          {this.renderColor('trackColor', this.state.trackColor)}
          {this.renderColor('progressColor', this.state.progressColor)}
        </div>
      </div>
    );
  },

  handleSliderChange(name, pos) {
    var s = {}; s[name] = pos.x;
    this.setState(s);
  },

  handleColorChange(name, color) {
    var s = {}; s[name] = color;
    this.setState(s);
  }
});

React.render(<App/>, document.body);
