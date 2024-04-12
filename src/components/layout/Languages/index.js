/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from 'gsap';
import { useLanguage } from '@/contexts/LanguageContext';

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

const Languages = () => {
  const { language, handleLanguageChange } = useLanguage();

  return (
    <nav css={languagesStyles}>
      <ul>
        <li className={`regular-link ${language === 'ENG' ? 'active' : ''}`} onClick={() => handleLanguageChange('ENG')}>ENG</li>
        <li className={`regular-link ${language === 'ES' ? 'active' : ''}`} onClick={() => handleLanguageChange('ES')}>ES</li>
        <li className={`regular-link ${language === 'PL' ? 'active' : ''}`} onClick={() => handleLanguageChange('PL')}>PL</li>
      </ul>
    </nav>
  );
};

export default Languages;
