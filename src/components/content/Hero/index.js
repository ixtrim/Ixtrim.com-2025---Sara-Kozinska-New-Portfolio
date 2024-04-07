/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const contentStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    margin: 100px 0;
  }
`;

const Hero = () => {
  return (
    <div css={contentStyles}>
      <br/><br/>
      <div id="section-hero">
        LOGO
        <h1>Software Developer</h1>
      </div>
    </div>
  );
};

export default Hero;
