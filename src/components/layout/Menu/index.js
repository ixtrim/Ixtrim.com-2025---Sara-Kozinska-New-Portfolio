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
  const { language, content } = useLanguage();
  const [activeSection, setActiveSection] = useState('section-hero');
  const menuRefs = useRef([]);
  menuRefs.current = [];
  const buttonRefs = useRef([]);

  buttonRefs.current = menuRefs.current.map(() => React.createRef());

  const addToRefs = (el) => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el);
    }
  };

  const menuLabels = {
    itemHero: {
      ENG: ["Start"],
      ES: ["Start"],
      PL: ["Start"]
    },
    itemAbout: {
      ENG: ["About"],
      ES: ["Sobre mí"],
      PL: ["O mnie"]
    },
    itemSkills: {
      ENG: ["Skills"],
      ES: ["Habilidades"],
      PL: ["Umiejętności"]
    },
    itemPortfolio: {
      ENG: ["Portfolio"],
      ES: ["Portafolio"],
      PL: ["Portfolio"]
    },
    itemClients: {
      ENG: ["Testimonials"],
      ES: ["Testimonios"],
      PL: ["Referencje"]
    },
    itemExperience: {
      ENG: ["Experience"],
      ES: ["Experiencia"],
      PL: ["Doświadczenie"]
    },
    itemEducation: {
      ENG: ["Education"],
      ES: ["Educación"],
      PL: ["Edukacja"]
    },
    itemContact: {
      ENG: ["Contact"],
      ES: ["Contacto"],
      PL: ["Kontakt"]
    }
  };

  const menuItems = [
    { id: 'section-hero', key: 'hero', defaultLabel: menuLabels['itemHero'][language] },
    { id: 'section-about', key: 'about', defaultLabel: menuLabels['itemAbout'][language] },
    { id: 'section-skills', key: 'skills', defaultLabel: menuLabels['itemSkills'][language] },
    { id: 'section-portfolio', key: 'portfolio', defaultLabel: menuLabels['itemPortfolio'][language] },
    { id: 'section-clients', key: 'clients', defaultLabel: menuLabels['itemClients'][language] },
    { id: 'section-experience', key: 'experience', defaultLabel: menuLabels['itemExperience'][language] },
    { id: 'section-education', key: 'education', defaultLabel: menuLabels['itemEducation'][language] },
    { id: 'section-contact', key: 'contact', defaultLabel: menuLabels['itemContact'][language] },
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
    gsap.timeline()
      .to(buttonRefs.current, { opacity: 0, y: -20, duration: 0.2 })
      .to(buttonRefs.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 });
  }, [language]);

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
          ref={el => buttonRefs.current[index] = el}
          onClick={() => scrollToSection(item.id)}
          className={`regular-link ${activeSection === item.id ? 'active' : ''}`}
        >
          {content ? content.menu[index]?.title || item.defaultLabel : item.defaultLabel}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
