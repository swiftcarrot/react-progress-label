require('react-input-color/dist/input-color.css');
require('react-input-slider/dist/input-slider.css');
require('./app.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Color = require('react-input-color');
const Slider = require('react-input-slider');
const ProgressLabel = require('../lib/progress-label');
const NestedExample = require('../__fixtures__/nested');

class App extends React.Component {
  state = {
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

  handleSliderChange(name, pos) {
    var s = {};
    s[name] = pos.x;
    this.setState(s);
  }

  handleColorChange(name, color) {
    var s = {};
    s[name] = color;
    this.setState(s);
  }

  renderSlider(name, min, max) {
    return (
      <div>
        <div>{`${name} (${this.state[name]})`}</div>
        <Slider
          className="x-slider"
          x={this.state[name]}
          xmin={min}
          xmax={max}
          onChange={() => this.handleSliderChange(name)}
        />
      </div>
    );
  }

  renderColor(name) {
    return (
      <div>
        <span>{name}</span>
        <Color
          value={this.state[name]}
          onChange={() => this.handleColorChange(name)}
        />
      </div>
    );
  }

  render() {
    const { size } = this.state;
    const textStyle = {
      fill: '#ffffff',
      textAnchor: 'middle'
    };

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
          progressColor={this.state.progressColor}
        >

          <text x={size / 2} y={size / 2} style={textStyle}>
            {`${parseInt(this.state.progress, 10)}%`}
          </text>
        </ProgressLabel>

        <div className="m-controls">
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
        <NestedExample />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
