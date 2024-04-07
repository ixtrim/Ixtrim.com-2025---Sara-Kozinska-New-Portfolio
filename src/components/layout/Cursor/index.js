/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import theme from '@/theme';
import { css } from '@emotion/react';
import paper from 'paper';

const cursorStyles = css`
  .cursor--small {
    position: fixed;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${theme.colors.orange};
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 10000;
  }
  .cursor--canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
  }
`;

const Cursor = () => {
  useEffect(() => {
    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight / 2;
    const cursorSmall = document.querySelector('.cursor--small');

    // Update small cursor position immediately on mouse move
    document.addEventListener('mousemove', (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      // Update small cursor position
      cursorSmall.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`; // Adjust for cursor size
    });

    // Setup canvas and paper.js
    paper.setup(document.querySelector('.cursor--canvas'));
    const strokeColor = "rgba(253, 179, 44, 0.5)";
    const strokeWidth = 1;
    // Create a circle that will follow the cursor
    const circle = new paper.Path.Circle({
      center: [clientX, clientY],
      radius: 20,
      strokeColor,
      strokeWidth,
      fillColor: null,
    });

    let lastX = clientX;
    let lastY = clientY;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    paper.view.onFrame = (event) => {
      // Apply a bigger delay for the circle's following effect
      lastX = lerp(lastX, clientX, 0.05); // Decrease the lerp factor for a bigger delay
      lastY = lerp(lastY, clientY, 0.05);
      circle.position = new paper.Point(lastX, lastY);
    };

    return () => {
      paper.view.onFrame = null; // Cleanup onFrame event handler
    };
  }, []);

  return (
    <>
      <div css={cursorStyles}>
        <div className="cursor--small"></div>
        <canvas className="cursor--canvas"></canvas>
      </div>
    </>
  );
};

export default Cursor;