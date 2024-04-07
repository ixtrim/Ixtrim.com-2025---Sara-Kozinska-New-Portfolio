/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const aboutStyles = css`
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

const About = () => {
  return (
    <div css={aboutStyles}>
      <br/><br/>
      <div id="section-about">
        <h3>About Me/Introduction</h3><br/>
        <p>A brief introduction about the developer, including their specialization in software development. This section should give a sense of the developer's personality, professional interests, and what motivates them.</p>
      </div>
    </div>
  );
};

export default About;
