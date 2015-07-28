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

  getDefaultProps() {
    return {
      startDegree: 0,
      progress: 0,
      progressWidth: 5,
      trackWidth: 5,
      cornersWidth: 10,
      size: 200
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
    var progress = this.props.progress;
    var r = 50 - this.props.trackWidth/2;
    var startDegree = this.props.startDegree;
    var endDegree = startDegree + progress * 360 / 100;
    var s = this.getPoint(r, this.props.startDegree);
    var e = this.getPoint(r, endDegree);

    var progressPath = null;
    if(progress < 50) {
      progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
    } else {
      var m = this.getPoint(r, startDegree + 180);
      progressPath =
        `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${m.x},${m.y}
        M ${m.x} ${m.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
    }

    var progressStyle = {
      strokeWidth: this.props.progressWidth,
      stroke: this.props.progressColor,
      fill: 'none'
    };

    var trackStyle = {
      fill: this.props.fillColor,
      stroke: this.props.trackColor,
      strokeWidth: this.props.trackWidth
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
        <circle cx={s.x} cy={s.y} r={this.props.cornersWidth} fill={this.props.progressColor}/>
        <circle cx={e.x} cy={e.y} r={this.props.cornersWidth} fill={this.props.progressColor}/>

        {this.props.children}
      </svg>
    );
  }
});