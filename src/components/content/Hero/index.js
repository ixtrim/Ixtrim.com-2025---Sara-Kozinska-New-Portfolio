/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from 'gsap';

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

  .text-content {
    opacity: 0; // Start with text content hidden
  }
`;

const Hero = () => {
  const [language, setLanguage] = useState('ENG');
  const heroTextContent = {
    ENG: "Software Developer",
    ES: "Desarrollador de Software",
    PL: "Programista"
  };

  useEffect(() => {
    animateTextContent();
  }, [language]); // Re-run the animation when language changes

  const animateTextContent = () => {
    const textContents = document.querySelectorAll('.text-content');
    gsap.fromTo(textContents, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  };

  // Example function to change language (could be triggered by a language switcher component)
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div css={contentStyles}>
      <br/><br/>
      <div id="section-hero">
        LOGO
        <h1 className="text-content">{heroTextContent[language]}</h1>
      </div>
      {/* Example language switcher buttons */}
      <button onClick={() => changeLanguage('ENG')}>ENG</button>
      <button onClick={() => changeLanguage('ES')}>ES</button>
      <button onClick={() => changeLanguage('PL')}>PL</button>
    </div>
  );
};

export default Hero;
