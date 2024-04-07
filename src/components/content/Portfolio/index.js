/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const portfolioStyles = css`
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

const Portfolio = () => {
  return (
    <div css={portfolioStyles}>
      <div id="section-portfolio">
        <h3>Portfolio/Projects</h3><br/>
        <p>A portfolio section showcasing their best work, including descriptions of each project, the technologies used, their role in the project, and links to live sites or code repositories (e.g., GitHub). Projects that demonstrate real-world application, complexity, and the developer's ability to solve problems are particularly valuable.</p>
      </div>
    </div>
  );
};

export default Portfolio;
