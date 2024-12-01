import React, { createContext, useState, useContext, useEffect } from 'react';
import { animateFadeAndSlide } from '../utils/animations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ENG');
  const [content, setContent] = useState(null);

  const handleLanguageChange = (newLanguage) => {
    const buttons = document.querySelectorAll('.main-menu button');

    animateFadeAndSlide(buttons, () => {
      setLanguage(newLanguage);
    });
  };

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/data/content_${language.toLowerCase()}.json`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error loading content:', error);
      }
    };
    loadContent();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, content, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
