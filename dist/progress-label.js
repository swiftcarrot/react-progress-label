'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');

module.exports = React.createClass({
  displayName: 'ProgressLabel',

  propTypes: {
    size: React.PropTypes.number,
    startDegree: React.PropTypes.number,
    endDegree: React.PropTypes.number,
    progressWidth: React.PropTypes.number,
    trackWidth: React.PropTypes.number,
    cornersWidth: React.PropTypes.number,
    progress: React.PropTypes.number,
    fillColor: React.PropTypes.string,
    trackColor: React.PropTypes.string,
    progressColor: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      startDegree: 0,
      progress: 0,
      progressWidth: 5,
      trackWidth: 5,
      cornersWidth: 10,
      size: 200
    };
  },
  getPoint: function getPoint(r, degree) {
    var size = this.props.size;
    var d = degree / 180 * Math.PI;

    return {
      x: r * Math.sin(d) + size / 2,
      y: this.props.trackWidth / 2 + r * (1 - Math.cos(d))
    };
  },
  render: function render() {
    var _props = this.props;
    var progress = _props.progress;
    var progressWidth = _props.progressWidth;
    var progressColor = _props.progressColor;
    var trackWidth = _props.trackWidth;
    var cornersWidth = _props.cornersWidth;
    var fillColor = _props.fillColor;
    var trackColor = _props.trackColor;
    var startDegree = _props.startDegree;
    var size = _props.size;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['progress', 'progressWidth', 'progressColor', 'trackWidth', 'cornersWidth', 'fillColor', 'trackColor', 'startDegree', 'size', 'children']);

    var r = size / 2 - trackWidth / 2;
    var endDegree = startDegree + progress * 360 / 100;
    var s = this.getPoint(r, startDegree);
    var e = this.getPoint(r, endDegree);

    var progressPath = null;
    if (progress < 50) {
      progressPath = 'M ' + s.x + ' ' + s.y + ' A ' + r + ' ' + r + ', 0, 0, 1, ' + e.x + ',' + e.y;
    } else {
      var m = this.getPoint(r, startDegree + 180);
      progressPath = 'M ' + s.x + ' ' + s.y + ' A ' + r + ' ' + r + ', 0, 0, 1, ' + m.x + ',' + m.y + '\n        M ' + m.x + ' ' + m.y + ' A ' + r + ' ' + r + ', 0, 0, 1, ' + e.x + ',' + e.y;
    }

    var progressStyle = {
      strokeWidth: progressWidth,
      stroke: progressColor,
      fill: 'none'
    };

    var trackStyle = {
      fill: fillColor,
      stroke: trackColor,
      strokeWidth: trackWidth
    };

    return React.createElement(
      'svg',
      _extends({}, props, { width: size, height: size, viewBox: '0 0 ' + size + ' ' + size }),
      React.createElement('circle', {
        cx: size / 2,
        cy: size / 2,
        r: r,
        style: trackStyle
      }),
      progress > 0 ? React.createElement('path', {
        d: progressPath,
        style: progressStyle
      }) : null,
      progress > 0 ? React.createElement('circle', {
        cx: s.x,
        cy: s.y,
        r: cornersWidth,
        fill: progressColor
      }) : null,
      progress > 0 ? React.createElement('circle', {
        cx: e.x,
        cy: e.y,
        r: cornersWidth,
        fill: progressColor
      }) : null,
      children
    );
  }
});