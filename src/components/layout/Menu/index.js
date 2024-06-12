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
    font-family: ${theme.fonts.body};
    font-size: ${theme.linkSizes.small.fontSize};
    letter-spacing: 0.35em;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    &:hover,
    &.active {
      color: ${theme.colors.orange};
    }
  }
`;

const Menu = () => {
  const { language } = useLanguage();
  const lastScrollY = useRef(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('section-hero');
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0.5 }
    );

    menuItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('section-hero');
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveSection('section-contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      menuItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

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
          className={`regular-link ${activeSection === item.id ? 'active' : ''}`}
        >
          {item.labels[language]}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
