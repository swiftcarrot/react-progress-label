import React from 'react';

function getPoint(r, degree, size, trackWidth) {
  const d = (degree / 180) * Math.PI;

  return {
    x: r * Math.sin(d) + size / 2,
    y: trackWidth / 2 + r * (1 - Math.cos(d))
  };
}

const ProgressLabel = ({
  progress,
  progressWidth,
  progressColor,
  trackWidth,
  cornersWidth,
  fillColor,
  trackColor,
  startDegree,
  size,
  children,
  ...props
}) => {
  const r = size / 2 - trackWidth / 2;
  const endDegree = startDegree + (progress * 360) / 100;
  const s = getPoint(r, startDegree, size, trackWidth);
  const e = getPoint(r, endDegree, size, trackWidth);

  let progressPath = null;
  if (progress < 50) {
    progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
  } else {
    const m = getPoint(r, startDegree + 180, size, trackWidth);
    progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${m.x},${m.y}
        M ${m.x} ${m.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
  }

  const progressStyle = {
    strokeWidth: progressWidth,
    stroke: progressColor,
    fill: 'none'
  };

  const trackStyle = {
    fill: fillColor,
    stroke: trackColor,
    strokeWidth: trackWidth
  };

  return (
    <svg {...props} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} style={trackStyle} />
      {progress > 0 ? <path d={progressPath} style={progressStyle} /> : null}
      {progress > 0 ? (
        <circle cx={s.x} cy={s.y} r={cornersWidth} fill={progressColor} />
      ) : null}
      {progress > 0 ? (
        <circle cx={e.x} cy={e.y} r={cornersWidth} fill={progressColor} />
      ) : null}
      {children}
    </svg>
  );
};

ProgressLabel.defaultProps = {
  startDegree: 0,
  progress: 0,
  progressWidth: 5,
  trackWidth: 20,
  cornersWidth: 10,
  size: 200,
  fillColor: '#ffffff',
  trackColor: '#ff0000',
  progressColor: '#00ff00'
};

export default ProgressLabel;
