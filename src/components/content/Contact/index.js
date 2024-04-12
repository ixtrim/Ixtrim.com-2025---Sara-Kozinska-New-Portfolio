/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

const contactStyles = css`
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

const Contact = () => {
  return (
    <div css={contactStyles}>
      <div id="section-contact">
        <h3>Contact Information</h3><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>Clear and easy ways to contact the developer, including email, LinkedIn profile, and other relevant social media or professional networking profiles.</p>
      </div>
    </div>
  );
};

export default Contact;
