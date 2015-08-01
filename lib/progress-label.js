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
    var size = this.props.size;
    var d = degree/180 * Math.PI;

    return {
      x: r * Math.sin(d) + size/2,
      y: this.props.trackWidth/2 + r * (1 - Math.cos(d))
    };
  },

  render() {
    var size = this.props.size;
    var progress = this.props.progress;
    var r = size/2 - this.props.trackWidth/2;
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
      <svg {...this.props} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size/2}
          cy={size/2}
          r={r}
          style={trackStyle}
        />

        {progress > 0 ?
        <path
          d={progressPath}
          style={progressStyle}
        /> : null}

        {progress > 0 ?
        <circle
          cx={s.x}
          cy={s.y}
          r={this.props.cornersWidth}
          fill={this.props.progressColor}
        /> : null}

        {progress > 0 ?
        <circle
          cx={e.x}
          cy={e.y}
          r={this.props.cornersWidth}
          fill={this.props.progressColor}
        /> : null}

        {this.props.children}
      </svg>
    );
  }
});
