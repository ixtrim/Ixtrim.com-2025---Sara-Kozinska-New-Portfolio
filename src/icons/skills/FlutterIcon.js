import React from 'react';

const FlutterIcon = ({ width = 30, height = 30, color = '#414042', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1999 2474.2"
    width={width}
    height={height}
    {...props}
  >
    <linearGradient id="a" gradientTransform="matrix(380.4042 -380.4175 -53.104 -53.1021 908228.3125 -700059.5)" gradientUnits="userSpaceOnUse" x1="-2115.0029" x2="-2115.0029" y1="1930.7407" y2="1929.7407"><stop offset=".2" stop-opacity=".15"/><stop offset=".85" stop-color="#616161" stop-opacity=".01"/></linearGradient><linearGradient id="b" gradientTransform="matrix(565.291 0 0 -380.9571 1196694.25 743476.5625)" gradientUnits="userSpaceOnUse" x1="-2115.2688" x2="-2114.2688" y1="1946.3563" y2="1946.3563"><stop offset=".2" stop-opacity=".55"/><stop offset=".85" stop-color="#616161" stop-opacity=".01"/></linearGradient><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5" fill-opacity=".8"/><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"/><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"/><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"/><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"/></svg>
);

export default FlutterIcon;
