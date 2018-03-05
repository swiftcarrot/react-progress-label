import 'react-input-color/dist/input-color.css';
import 'react-input-slider/dist/input-slider.css';
import './app.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Color from 'react-input-color';
import Slider from 'react-input-slider';
import ProgressLabel from '../src/progress-label';
import NestedExample from '../__fixtures__/nested';

class App extends Component {
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
    console.log(name, pos);
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
          onChange={val => this.handleSliderChange(name, val)}
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
          onChange={val => this.handleColorChange(name, val)}
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
