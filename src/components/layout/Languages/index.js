/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from 'gsap';

const languagesStyles = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 5px;

    li {
      font-size: ${theme.fontSizes.smallest};
      color: ${theme.colors.white};
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: ${theme.colors.orange};
      }

      &.active {
        color: ${theme.colors.orange};
      }
    }
  }
`;

const Languages = ({ onLanguageChange }) => {
  const [activeLanguage, setActiveLanguage] = useState('ENG');

  useEffect(() => {
    // Assuming you have elements to animate when language changes
    // For demonstration, let's say they have the class 'text-content'
    const textContents = document.querySelectorAll('.text-content');
    gsap.fromTo(textContents, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, [activeLanguage]);

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
    onLanguageChange(language); // Propagate the change to parent component or context
  };

  return (
    <nav css={languagesStyles}>
      <ul>
        <li className={`regular-link ${activeLanguage === 'ENG' ? 'active' : ''}`} onClick={() => handleLanguageChange('ENG')}>ENG</li>
        <li className={`regular-link ${activeLanguage === 'ES' ? 'active' : ''}`} onClick={() => handleLanguageChange('ES')}>ES</li>
        <li className={`regular-link ${activeLanguage === 'PL' ? 'active' : ''}`} onClick={() => handleLanguageChange('PL')}>PL</li>
      </ul>
    </nav>
  );
};

export default Languages;
