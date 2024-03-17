/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
// Import smaller content components here
// import SmallComponent1 from '../path/to/SmallComponent1';
// import SmallComponent2 from '../path/to/SmallComponent2';

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

const Content = () => {
  return (
    <div css={contentStyles}>
      <br/><br/>
      <div id="section-hero">
        LOGO
        <h1>Software Developer</h1>
      </div>
      <br/><br/>
      <div id="section-about">
        <h3>About Me/Introduction</h3><br/>
        <p>A brief introduction about the developer, including their specialization in software development. This section should give a sense of the developer's personality, professional interests, and what motivates them.</p>
      </div>
      <br/><br/>
      <div id="section-skills">
        <h3>Technical Skills</h3><br/>
        <p>A detailed list or visual representation of their technical skills, including programming languages, frameworks, tools, and technologies they are proficient in. It's helpful if the developer can rate their proficiency or experience level in each skill.</p>
      </div>
      <br/><br/>
      <div id="section-portfolio">
        <h3>Portfolio/Projects</h3><br/>
        <p>A portfolio section showcasing their best work, including descriptions of each project, the technologies used, their role in the project, and links to live sites or code repositories (e.g., GitHub). Projects that demonstrate real-world application, complexity, and the developer's ability to solve problems are particularly valuable.</p>
      </div>
      <br/><br/>
      <div id="section-clients">
        <h3>Testimonials/Recommendations</h3><br/>
        <p>Testimonials or recommendations from colleagues, clients, or employers can provide valuable third-party perspectives on the developer's technical abilities, work ethic, and teamwork skills.</p>
      </div>
      <br/><br/>
      <div id="section-experience">
        <h3>Work Experience</h3><br/>
        <p>Information on their formal education, including degrees obtained, institutions attended, and any relevant coursework or projects. Additionally, details on any industry certifications or continuous learning efforts (e.g., online courses, workshops) are important.</p>
      </div>
      <br/><br/>
      <div id="section-education">
        <h3>Education and Certifications</h3><br/>
        <p>Information on their formal education, including degrees obtained, institutions attended, and any relevant coursework or projects. Additionally, details on any industry certifications or continuous learning efforts (e.g., online courses, workshops) are important.</p>
      </div>
      <br/><br/>
      <div id="section-contact">
        <h3>Contact Information</h3><br/>
        <p>Clear and easy ways to contact the developer, including email, LinkedIn profile, and other relevant social media or professional networking profiles.</p>
      </div>
    </div>
  );
};

export default Content;