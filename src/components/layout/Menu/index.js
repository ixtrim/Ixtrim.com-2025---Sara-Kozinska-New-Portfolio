/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

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
  const lastScrollY = useRef(window.scrollY);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {['section-hero', 'section-about', 'section-skills', 'section-portfolio', 'section-clients', 'section-experience', 'section-education', 'section-contact'].map((section) => (
        <button key={section} onClick={() => scrollToSection(section)} className="regular-link">
          {section.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
