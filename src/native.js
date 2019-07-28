import React from 'react';
import Svg, { Path, Circle, Text } from 'react-native-svg';
import ProgressLabel from './progress-label';

const RNProgressLabel = props => {
  return <ProgressLabel components={{ Svg, Path, Circle, Text }} {...props} />;
};

export default RNProgressLabel;
