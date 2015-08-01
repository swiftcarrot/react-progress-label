require('react-input-color/lib/input-color.less');
require('react-input-slider/lib/input-slider.less');
require('./app.less');

var React = require('react');
var ProgressLabel = require('../lib/progress-label');
var Color = require('react-input-color');
var Slider = require('react-input-slider');

var textStyle = {
 'fill': '#ffffff',
 'textAnchor': 'middle'
};

var NestedExample = React.createClass({
  displayName: 'NestedExample',

  render() {
    var pw = 24;
    var cw = pw / 2;
    var tw = pw;

    return (
      <div className="m-nested">
        <div className="example">
          <ProgressLabel
            className="label-1"
            progress={40}
            progressWidth={pw}
            trackWidth={tw}
            cornersWidth={cw}
            progressColor="#ff0000"
            trackColor="#330000"
            size={250}>
          </ProgressLabel>

          <ProgressLabel
            className="label-2"
            progress={50}
            progressWidth={pw}
            trackWidth={tw}
            cornersWidth={cw}
            progressColor="#00ff00"
            trackColor="#003300"
            size={190}>
          </ProgressLabel>

          <ProgressLabel
            className="label-3"
            progress={80}
            progressWidth={pw}
            trackWidth={tw}
            cornersWidth={cw}
            progressColor="#05bae0"
            trackColor="#01252d"
            size={130}>
          </ProgressLabel>
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      startDegree: 60,
      progress: 50,
      progressWidth: 20,
      trackWidth: 40,
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
        <span>{`${name} (${this.state[name]})`}</span>
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
    var size = this.state.size;

    return (
      <div className="app">
        <h3>Basic</h3>

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

          <text x={size/2} y={size/2} style={textStyle}>{`${parseInt(this.state.progress, 10)}%`}</text>
        </ProgressLabel>

        <div className="controls">
          {this.renderSlider('progress', 0, 100)}
          {this.renderSlider('startDegree', 0, 360)}
          {this.renderSlider('progressWidth', 1, 100)}
          {this.renderSlider('trackWidth', 1, 100)}
          {this.renderSlider('cornersWidth', 1, 50)}
          {this.renderSlider('size', 100, 400)}
          {this.renderColor('fillColor', this.state.fillColor)}
          {this.renderColor('trackColor', this.state.trackColor)}
          {this.renderColor('progressColor', this.state.progressColor)}
        </div>

        <h3>Nested</h3>
        <NestedExample/>
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

React.render(<App/>, document.getElementById('app'));
