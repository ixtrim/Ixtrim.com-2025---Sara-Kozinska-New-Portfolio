import React from 'react';

const WhatsAppIcon = ({ width = 30, height = 30, color = '#414042', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30.2"
    width={width}
    height={height}
    {...props}
  >
    <g>
      <path
        d="M8.3,26.7c-0.8-0.5-4.7,2.4-5.3,1.7c-0.6-0.6,2-4.7,1.5-5.4C2.9,20.8,2,18.1,2,15.2C2,7.8,8,1.7,15.5,1.7   S29,7.8,29,15.2s-6,13.5-13.5,13.5c-1,0-1.9-0.1-2.8-0.3"
        fill="none"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path
        d="M12.7,8.4l1.2,3c0.1,0.2,0,0.4-0.2,0.5c-0.5,0.3-1.2,1-0.4,2.1c1,1.4,3.7,4.9,5.9,2.6c0.1-0.1,0.3-0.2,0.5-0.1   l3.2,1.4c0.2,0.1,0.3,0.4,0.2,0.6c-0.7,1.4-3.4,5.1-10.1-0.7c-6.8-5.9-2.4-8.8-0.9-9.5C12.3,8,12.6,8.1,12.7,8.4z"
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

export default WhatsAppIcon;
