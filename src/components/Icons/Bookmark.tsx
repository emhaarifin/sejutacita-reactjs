import React from 'react';
import { IconProps } from './index';

const Bookmark: React.FC<IconProps> = ({ width, height, size, fill, stroke }) => {
  return (
    <svg
      className='transition-all'
      xmlns='http://www.w3.org/2000/svg'
      width={width || size}
      height={height || size}
      viewBox='0 0 24 24'
      fill={fill}
      stroke={stroke}
    >
      <path d='M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z' />
    </svg>
  );
};

export default Bookmark;
