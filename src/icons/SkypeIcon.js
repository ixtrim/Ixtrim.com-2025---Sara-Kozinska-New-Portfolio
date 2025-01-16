import React from 'react';

const SkypeIcon = ({ width = 30, height = 30, color = '#414042', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30.2"
    width={width}
    height={height}
    {...props}
  >
    <g>
      <path
        d="M12,27.1c-5.7-1.2-10-6-10-12c0-0.8,0.1-1.6,0.2-2.3l0.1-0.2C1.3,11.3,1,10.1,1,8.5c0-4.1,3.6-7.4,8-7.4   c1.6,0,3.1,0.5,4.4,1.2L15,2.5c7.2,0,13,5.7,13,12.6c0,1.2-0.2,2.4-0.5,3.5c0,0,0.2,1,0.3,2.7c0.3,4.1-3.6,7.4-8,7.4   c-1.3,0-2.6-0.3-3.6-0.8c-0.4-0.2-0.6-0.7-0.5-1.1c0.3-1.1,0.4-3.2-2.2-3.9c-4.2-1-5.6-4.1-5.7-4.3c-0.3-0.7,0-1.5,0.8-1.8   c0.7-0.3,1.5,0,1.8,0.8c0,0.1,1.3,2.8,5.4,2.8c2,0,2.8-0.9,2.9-1.8c0.1-0.7-0.3-1.5-1.4-1.7c-4-0.8-8.3-3-8.8-6.1   c-0.1-0.9,0-2.5,2.2-3.8c2-1.1,3.9-1.4,5.7-0.8c3.1,1,4.6,4.1,4.6,4.3c0.3,0.7,0,1.5-0.7,1.9c-0.7,0.3-1.5,0-1.8-0.7l0,0   c0,0-1.1-2.2-3-2.8c-1.1-0.3-3.6-0.2-3.9,1.3c-0.3,1.4,2.3,3.1,6.2,4c2.3,0.5,4,2.5,3.6,4.7c-0.6,3-2.6,3.6-2.6,3.6"
        fill="none"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </g>
  </svg>
);

export default SkypeIcon;
