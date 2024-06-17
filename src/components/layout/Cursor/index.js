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
    transition: background 0.3s ease, width 0.3s ease, height 0.3s ease, margin 0.3s ease-in-out;

    &.hovered {
      background: ${theme.colors.red};
      width: 16px;
      height: 16px;
      transform: translate(-50%, -50%);
      margin: -4px 0 0 -4px;
    }
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

    document.addEventListener('mousemove', (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      cursorSmall.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
    });

    paper.setup(document.querySelector('.cursor--canvas'));
    const strokeColor = theme.colors.orange;
    const strokeWidth = 1;
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
      lastX = lerp(lastX, clientX, 0.05);
      lastY = lerp(lastY, clientY, 0.05);
      circle.position = new paper.Point(lastX, lastY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.regular-link')) {
        cursorSmall.classList.add('hovered');
        circle.strokeColor = theme.colors.red;
        circle.strokeWidth = 1;
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('.regular-link')) {
        cursorSmall.classList.remove('hovered');
        circle.strokeColor = theme.colors.orange;
        circle.strokeWidth = 1;
      }
    };

    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      paper.view.onFrame = null;
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
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
