/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollToPlugin);

const menuStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  color: ${theme.colors.white};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.dark};
    z-index: -1;
    opacity: 0.95;
  }

  button {
    cursor: pointer;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.linkSizes.small.fontSize};
    letter-spacing: 0.35em;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    &:hover {
      color: ${theme.colors.orange};
    }
  }
`;

const Menu = () => {
  const { language } = useLanguage();
  const lastScrollY = useRef(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const menuRefs = useRef([]);
  menuRefs.current = [];
  const addToRefs = (el) => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el);
    }
  };

  const menuItems = [
    { id: 'section-hero', labels: { ENG: "Start", ES: "Inicio", PL: "Start" } },
    { id: 'section-about', labels: { ENG: "About", ES: "Acerca de", PL: "O mnie" } },
    { id: 'section-skills', labels: { ENG: "Skills", ES: "Habilidades", PL: "Umiejętności" } },
    { id: 'section-portfolio', labels: { ENG: "Portfolio", ES: "Portafolio", PL: "Portfolio" } },
    { id: 'section-clients', labels: { ENG: "Testimonials", ES: "Testimonios", PL: "Referencje" } },
    { id: 'section-experience', labels: { ENG: "Experience", ES: "Experiencia", PL: "Doświadczenie" } },
    { id: 'section-education', labels: { ENG: "Education", ES: "Educación", PL: "Edukacja" } },
    { id: 'section-contact', labels: { ENG: "Contact", ES: "Contacto", PL: "Kontakt" } },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(menuRefs.current, {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: 0.2,
      onComplete: () => {
        // Animation completed
      }
    }).to(menuRefs.current, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      delay: 0.1
    });
  }, [language]);

  useEffect(() => {
    gsap.to("nav.main-menu", { top: hidden ? "-100px" : "0px", ease: "power2.inOut" });
  }, [hidden]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topPos = section.getBoundingClientRect().top + window.pageYOffset - 150;
      gsap.to(window, { duration: 1.5, scrollTo: { y: topPos, autoKill: false }, ease: "power2.inOut" });
    }
  };

  return (
    <nav className="main-menu" css={menuStyles}>
      {menuItems.map((item, index) => (
        <button
          key={item.id}
          ref={addToRefs}
          onClick={() => scrollToSection(item.id)}
          className="regular-link"
        >
          {item.labels[language]}
        </button>
      ))}
    </nav>
  );
};

export default Menu;