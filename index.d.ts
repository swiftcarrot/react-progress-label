import { FC } from "react";

declare const ProgressLabel: FC<ProgressLabelProps>;

export interface ProgressLabelProps {
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
