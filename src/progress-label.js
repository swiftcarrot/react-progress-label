import React from "react";

function getPoint(r, degree, size, dy) {
  const d = (degree / 180) * Math.PI;

  return {
    x: r * Math.sin(d) + size / 2,
    y: r * (1 - Math.cos(d)) + dy,
  };
}

export default function ProgressLabel({
  components: { Svg, Circle, Path, Text },
  progress,
  progressWidth,
  progressColor,
  trackWidth,
  trackBorderWidth,
  trackBorderColor,
  cornersWidth,
  fillColor,
  trackColor,
  startDegree,
  size,
  text,
  textProps,
  ...props
}) {
  const size2 = size / 2;
  const cx = size2;
  const cy = cx;
  const dy = trackWidth / 2 + trackBorderWidth;
  const r = size2 - dy;
  const endDegree = startDegree + (progress * 360) / 100;
  const s = getPoint(r, startDegree, size, dy);
  const e = getPoint(r, endDegree, size, dy);

  let progressPath = null;
  if (progress < 50) {
    progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
  } else {
    const m = getPoint(r, startDegree + 180, size, dy);
    progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${m.x},${m.y}
        M ${m.x} ${m.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
  }

  const progressStyle = {
    strokeWidth: progressWidth,
    stroke: progressColor,
    fill: "none",
  };

  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={trackColor}
    >
      {trackBorderWidth > 0 ? (
        <Circle
          cx={cx}
          cy={cy}
          r={size2 - trackBorderWidth / 2}
          style={{
            stroke: trackBorderColor,
            strokeWidth: trackBorderWidth,
          }}
        />
      ) : null}

      {trackBorderWidth > 0 ? (
        <Circle
          cx={cx}
          cy={cy}
          r={size2 - trackBorderWidth - trackWidth - trackBorderWidth / 2}
          style={{
            stroke: trackBorderColor,
            strokeWidth: trackBorderWidth,
            fill: fillColor,
          }}
        />
      ) : null}

      {progress > 0 ? <Path d={progressPath} style={progressStyle} /> : null}
      {progress > 0 ? (
        <Circle cx={s.x} cy={s.y} r={cornersWidth} fill={progressColor} />
      ) : null}
      {progress > 0 ? (
        <Circle cx={e.x} cy={e.y} r={cornersWidth} fill={progressColor} />
      ) : null}
      {text ? <Text {...textProps}>{text}</Text> : null}
    </Svg>
  );
}

ProgressLabel.defaultProps = {
  startDegree: 0,
  progress: 0,
  progressWidth: 5,
  trackWidth: 20,
  trackBorderWidth: 0,
  trackBorderColor: "#0000ff",
  cornersWidth: 10,
  size: 200,
  fillColor: "#ffffff",
  trackColor: "#ff0000",
  progressColor: "#00ff00",
  components: {
    Svg: "svg",
    Path: "path",
    Circle: "circle",
    Text: "text",
  },
};
