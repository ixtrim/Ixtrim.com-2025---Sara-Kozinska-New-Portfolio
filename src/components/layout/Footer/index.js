/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import Link from '@/components/common/Link';
import { useLanguage } from '@/contexts/LanguageContext';
import { gsap } from 'gsap';
import { animateFadeAndSlide } from '@/utils/animations';

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
  const { language, content } = useLanguage();
  const [displayedLanguage, setDisplayedLanguage] = useState(language);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const footerTexts = {
    builtWith: {
      ENG: ["Website built with ", " + ", " powered by creative mind"],
      ES: ["Sitio web construido con ", " + ", " impulsado por una mente creativa"],
      PL: ["Strona zbudowana przy użyciu ", " + ", " sterowanych przez kreatywny umysł"],
    }
  };

  useEffect(() => {
    if (language !== displayedLanguage) {
      const elements = [
        textRef1.current,
        textRef2.current
      ];

      animateFadeAndSlide(elements, () => {
        setDisplayedLanguage(language);
      });
    }
  }, [language, displayedLanguage]);

  return (
    <footer css={footerStyles}>
      <p ref={textRef1}>{`© ${new Date().getFullYear()} ${content?.copyright || 'Sara Kozinska Software Developer. All rights reserved.'}`}</p>
      <p ref={textRef2}>
        {footerTexts['builtWith'][displayedLanguage][0]}
        <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" variant="white" size="small">REACT</Link>
        {footerTexts['builtWith'][displayedLanguage][1]}
        <Link href="https://gsap.com/" target="_blank" rel="noopener noreferrer" variant="white" size="small">GSAP</Link>
        {footerTexts['builtWith'][displayedLanguage][2]}.
      </p>
    </footer>
  );
};

export default Footer;
