/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const experienceStyles = css`
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

const Experience = () => {
  return (
    <div css={experienceStyles}>
      <br/><br/>
      <div id="section-experience">
        <h3>Work Experience</h3><br/>
        <p>Information on their formal education, including degrees obtained, institutions attended, and any relevant coursework or projects. Additionally, details on any industry certifications or continuous learning efforts (e.g., online courses, workshops) are important.</p>
      </div>
    </div>
  );
};

export default Experience;
