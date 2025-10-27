import React from 'react';
import Svg, { Path } from 'react-native-svg';


const DEFAULT_COLOR = '#021123';

export const IconPlay = ({ size = 15, color = DEFAULT_COLOR }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 11 15" fill="none">
      <Path d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z" fill={color} />
    </Svg>
  );
};

export const IconPause = ({ size = 15, color = DEFAULT_COLOR }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 15" fill="none">
      <Path d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z" fill={color} />
    </Svg>
  );
};