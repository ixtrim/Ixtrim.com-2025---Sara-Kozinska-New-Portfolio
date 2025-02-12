import React from 'react';

const VueIcon = ({ width = 30, height = 30, color = '#414042', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255.9759 220.80001"
    width={width}
    height={height}
    {...props}
  >
  <path
     d="M 204.8,0 H 256 L 128,220.8 0,0 H 97.92 L 128,51.2 157.44,0 Z"
     fill="#41b883" />
  <path
     d="M 0,0 128,220.8 256,0 H 204.8 L 128,132.48 50.56,0 Z"
     fill="#41b883" />
  <path
     d="M 50.56,0 128,133.12 204.8,0 H 157.44 L 128,51.2 97.92,0 Z"
     fill="#35495e" />
</svg>
);

export default VueIcon;
