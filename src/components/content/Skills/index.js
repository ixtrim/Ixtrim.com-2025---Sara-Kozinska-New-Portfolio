/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const skillsStyles = css`
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

const Skills = () => {
  return (
    <div css={skillsStyles}>
      <br/><br/>
      <div id="section-skills">
        <h3>Technical Skills</h3><br/>
        <p>A detailed list or visual representation of their technical skills, including programming languages, frameworks, tools, and technologies they are proficient in. It's helpful if the developer can rate their proficiency or experience level in each skill.</p>
      </div>
    </div>
  );
};

export default Skills;
