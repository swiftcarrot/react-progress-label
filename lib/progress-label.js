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
    progress: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      startDegree: 45,
      endDegree: 140,
      progressWidth: 8,
      trackWidth: 20,
      cornersWidth: 2,
      size: 400
    };
  },

  getPoint(r, degree) {
    var d = degree/180 * Math.PI;

    return {
      x: r * Math.sin(d) + 50,
      y: this.props.trackWidth/2 + r * (1 - Math.cos(d))
    };
  },

  render() {
    var size = this.props.size;
    var r = 50 - this.props.trackWidth/2;
    var startDegree = this.props.startDegree;
    var endDegree = this.props.endDegree;

    var range = endDegree - startDegree;
    var s = this.getPoint(r, this.props.startDegree);
    var e = this.getPoint(r, this.props.endDegree);
    var progress = parseInt(range/360 * 100, 10);

    var progressPath = range < 180 ?
      `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}` :
      `M ${s.x} ${s.y} A ${r} ${r}, 0, 1, 1, ${e.x},${e.y}`;

    var progressStyle = {
      strokeWidth: this.props.progressWidth,
      stroke: '#3498db',
      fill: 'none'
    };

    var trackStyle = {
      fill: 'none',
      stroke: '#efefef',
      strokeWidth: this.props.trackWidth
    };

    var textStyle = {
      'textAnchor': 'middle'
    };

    return (
      <svg width={size} height={size} viewBox='0 0 100 100'>
        <circle
          cx="50"
          cy="50"
          r={r}
          style={trackStyle}
        />
        <path
          d={progressPath}
          style={progressStyle}
        />
        <circle cx={s.x} cy={s.y} r={this.props.cornersWidth} fill="red"/>
        <circle cx={e.x} cy={e.y} r={this.props.cornersWidth} fill="green"/>
        <text x="50" y="50" style={textStyle}>{`${progress}%`}</text>
      </svg>
    );
  }
});
