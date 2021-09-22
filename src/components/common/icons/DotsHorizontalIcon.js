/**
 * @flow
 */
'use strict';

import React from 'react';

import Svg, {Path} from 'react-native-svg';

const DotsHorizontalIcon = ({fill, size}: Object = {}) => {
  const svg_width = size ? size : 16;
  const svg_height = svg_width / 4;
  return (
    <Svg fill="none" viewBox={`0 0 16 4`} width={svg_width} height={svg_height}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4ZM8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4ZM16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 0 14 0C15.1046 0 16 0.89543 16 2Z"
        fill={fill}
      />
    </Svg>
  );
};

export default DotsHorizontalIcon;
