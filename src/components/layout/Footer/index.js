/** @jsxImportSource @emotion/react */
import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import Link from '@/components/common/Link';
import { useLanguage } from '@/contexts/LanguageContext';
import { gsap } from 'gsap';

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
  const { language } = useLanguage();
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const footerTexts = {
  copyright: {
    ENG: `© ${new Date().getFullYear()} Sara Kozinska Software Developer. All rights reserved.`,
    ES: `© ${new Date().getFullYear()} Sara Kozinska Desarrolladora de Software. Todos los derechos reservados.`,
    PL: `© ${new Date().getFullYear()} Sara Kozinska Programistka. Wszelkie prawa zastrzeżone.`
  },
  builtWith: {
    ENG: "Website built with REACT and GSAP, powered by STRAPI.",
    ES: "Sitio web construido con REACT y GSAP, impulsado por STRAPI.",
    PL: "Strona zbudowana przy użyciu REACT i GSAP, napędzana przez STRAPI."
  }
};

  useEffect(() => {
    gsap.timeline()
      .to([textRef1.current, textRef2.current], { opacity: 0, y: -20, duration: 0.2 })
      .to([textRef1.current, textRef2.current], { opacity: 1, y: 0, duration: 0.5, delay: 0.1 });
  }, [language]);

  return (
    <footer css={footerStyles}>
      <p ref={textRef1}>{footerTexts['copyright'][language]}</p>
      <p ref={textRef2}>
        {footerTexts['builtWith'][language].substring(0, 17)}
        <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" variant="white" size="small">REACT</Link> and&nbsp; 
        <Link href="https://gsap.com/" target="_blank" rel="noopener noreferrer" variant="white" size="small">GSAP</Link>, powered by&nbsp; 
        <Link href="https://strapi.io/" target="_blank" rel="noopener noreferrer" variant="white" size="small">STRAPI</Link>.
      </p>
    </footer>
  );
};

export default Footer;
