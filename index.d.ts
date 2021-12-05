import { Component, FC, SVGAttributes } from 'react';

declare const ProgressLabel: FC<ProgressLabelProps>;

export interface ProgressLabelProps extends SVGAttributes<ProgressLabel> {
  size?: number;
  startDegree?: number;
  endDegree?: number;
  progressWidth?: number;
  trackWidth?: number;
  trackBorderWidth?: number;
  trackBorderColor?: string;
  cornersWidth?: number;
  progress?: number;
  fillColor: string;
  trackColor: string;
  progressColor: string;
}

export default ProgressLabel;
