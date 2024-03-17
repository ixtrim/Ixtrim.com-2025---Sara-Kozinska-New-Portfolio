/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '../../../theme';
import Link from '@/components/common/Link';

const footerStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 50px auto;
  padding: 0;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
    font-size: ${theme.fontSizes.smallest};
    color: ${theme.colors.white};
  }
`;

const Footer = () => {
  return (
    <footer css={footerStyles}>
      <p>© {new Date().getFullYear()} Sara Kozinska Software Developer. All rights reserved.</p>
      <p>Website built with <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" variant="white" size="small">REACT</Link> and <Link href="https://gsap.com/" target="_blank" rel="noopener noreferrer" variant="white" size="small">GSAP</Link>, powered by <Link href="https://strapi.io/" target="_blank" rel="noopener noreferrer" variant="white" size="small">STRAPI</Link>.</p>
    </footer>
  );
};

export default Footer;
