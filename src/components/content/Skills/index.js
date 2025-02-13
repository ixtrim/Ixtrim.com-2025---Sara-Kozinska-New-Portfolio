/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { useLanguage } from '@/contexts/LanguageContext';

import BitBucketIcon from '@/icons/skills/BitBucketIcon';
import BootstrapIcon from '@/icons/skills/BootstrapIcon';
import BubbleIoIcon from '@/icons/skills/BubbleIoIcon';
import CapacitorIcon from '@/icons/skills/CapacitorIcon';
import CypressIcon from '@/icons/skills/CypressIcon';
import DockerIcon from '@/icons/skills/DockerIcon';
import DrupalIcon from '@/icons/skills/DrupalIcon';
import FirebaseIcon from '@/icons/skills/FirebaseIcon';
import FlutterIcon from '@/icons/skills/FlutterIcon';
import GSAPIcon from '@/icons/skills/GSAPIcon';
import GitIcon from '@/icons/skills/GitIcon';
import GTmetrixIcon from '@/icons/skills/GTmetrixIcon';
import JavaScriptIcon from '@/icons/skills/JavaScriptIcon';
import JoomlaIcon from '@/icons/skills/JoomlaIcon';
import LaravelIcon from '@/icons/skills/LaravelIcon';
import LighthouseIcon from '@/icons/skills/LighthouseIcon';
import MySQLIcon from '@/icons/skills/MySQLIcon';
import PageSpeedInsightsIcon from '@/icons/skills/PageSpeedInsightsIcon';
import PHPIcon from '@/icons/skills/PHPIcon';
import PrestashopIcon from '@/icons/skills/PrestashopIcon';
import PrismicIcon from '@/icons/skills/PrismicIcon';
import ReactIcon from '@/icons/skills/ReactIcon';
import ReactNativeIcon from '@/icons/skills/ReactNativeIcon';
import ReduxIcon from '@/icons/skills/ReduxIcon';
import RestApiIcon from '@/icons/skills/RestApiIcon';
import SASSIcon from '@/icons/skills/SASSIcon';
import SanityIcon from '@/icons/skills/SanityIcon';
import ShopifyIcon from '@/icons/skills/ShopifyIcon';
import StrapiIcon from '@/icons/skills/StrapiIcon';
import SymfonyIcon from '@/icons/skills/SymfonyIcon';
import TailwindIcon from '@/icons/skills/TailwindIcon';
import TypeScriptIcon from '@/icons/skills/TypeScriptIcon';
import VueIcon from '@/icons/skills/VueIcon';
import WooCommerceIcon from '@/icons/skills/WooCommerceIcon';
import WordPressIcon from '@/icons/skills/WordPressIcon';

const skillIcons = {
  "BitBucket": BitBucketIcon,
  "Bootstrap": BootstrapIcon,
  "Bubble.Io": BubbleIoIcon,
  "Capacitor": CapacitorIcon,
  "Cypress": CypressIcon,
  "Docker": DockerIcon,
  "Drupal": DrupalIcon,
  "Firebase": FirebaseIcon,
  "Flutter": FlutterIcon,
  "GSAP": GSAPIcon,
  "Git": GitIcon,
  "Google Lighthouse": LighthouseIcon,
  "GTmetrix": GTmetrixIcon,
  "Java Script": JavaScriptIcon,
  "Joomla": JoomlaIcon,
  "Laravel": LaravelIcon,
  "MySQL": MySQLIcon,
  "Page Speed Insights": PageSpeedInsightsIcon,
  "PHP": PHPIcon,
  "Prestashop": PrestashopIcon,
  "Prismic": PrismicIcon,
  "React": ReactIcon,
  "React Native": ReactNativeIcon,
  "Redux": ReduxIcon,
  "Rest API": RestApiIcon,
  "SASS": SASSIcon,
  "Sanity": SanityIcon,
  "Shopify": ShopifyIcon,
  "Strapi": StrapiIcon,
  "Symfony": SymfonyIcon,
  "Tailwind CSS": TailwindIcon,
  "TypeScript": TypeScriptIcon,
  "Vue": VueIcon,
  "WooCommerce": WooCommerceIcon,
  "WordPress": WordPressIcon,
};

const skillsData = [
  {
    category: "textSubHeaderFirst",
    skills: [
      { name: "SASS" },
      { name: "Java Script" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "GSAP" },
      { name: "React" },
      { name: "Vue" },
      { name: "Redux" },
    ],
  },
  {
    category: "textSubHeaderSecond",
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Symfony" },
      { name: "WordPress" },
      { name: "Joomla" },
      { name: "Drupal" },
    ],
  },
  {
    category: "textSubHeaderThird",
    skills: [
      { name: "Firebase" },
      { name: "Rest API" },
      { name: "Strapi" },
      { name: "Prismic" },
      { name: "Sanity" },
      { name: "MySQL" },
    ],
  },
  {
    category: "textSubHeaderFourth",
    skills: [
      { name: "React Native" },
      { name: "Capacitor" },
      { name: "Flutter" },
      { name: "Bubble.Io" },
    ],
  },
  {
    category: "textSubHeaderFifth",
    skills: [
      { name: "WooCommerce" },
      { name: "Prestashop" },
      { name: "Shopify" },
    ],
  },
  {
    category: "textSubHeaderSixth",
    skills: [
      { name: "Git" },
      { name: "BitBucket" },
      { name: "Docker" },
    ],
  },
  {
    category: "textSubHeaderSeventh",
    skills: [
      { name: "Cypress" },
      { name: "Google Lighthouse" },
      { name: "Page Speed Insights" },
    ],
  },
];

const skillsContent = {
  textHeader: {
    ENG: "Tech Stack & Tools",
    ES: "Tecnologías y Herramientas",
    PL: "Technologie i Narzędzia",
  },
  textSubHeaderFirst: {
    ENG: "Frontend Development",
    ES: "Desarrollo Frontend",
    PL: "Frontend Development",
  },
  textSubHeaderSecond: {
    ENG: "Backend & CMS",
    ES: "Backend y CMS",
    PL: "Backend & CMS",
  },
  textSubHeaderThird: {
    ENG: "Databases & APIs",
    ES: "Bases de Datos y APIs",
    PL: "Bazy Danych i API",
  },
  textSubHeaderFourth: {
    ENG: "Mobile & No-Code Development",
    ES: "Desarrollo Móvil y No-Code",
    PL: "Mobile & No-Code Development",
  },
  textSubHeaderFifth: {
    ENG: "E-commerce & Integrations",
    ES: "E-commerce e Integraciones",
    PL: "E-commerce & Integracje",
  },
  textSubHeaderSixth: {
    ENG: "DevOps & Version Control",
    ES: "DevOps y Control de Versiones",
    PL: "DevOps & Kontrola Wersji",
  },
  textSubHeaderSeventh: {
    ENG: "Testing & Debugging",
    ES: "Pruebas y Depuración",
    PL: "Testowanie i Debugowanie",
  },
};

// Styles
const skillsStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    margin: ${theme.spaces.largeDesktop.section} 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces.largeDesktop.elements};

    h2,
    h3 {
      margin: 0;
      padding: 0;
      font-family: ${theme.fonts.heading};
      font-weight: ${theme.fontWeights.normal};
      line-height: 1.2;
      letter-spacing: 1px;
    }

    h2 {
      font-size: ${theme.fontSizes.xxxlarge};
      color: ${theme.colors.white};
      text-align: right;
    }

    h3 {
      font-size: ${theme.fontSizes.xlarge};
      color: ${theme.colors.grey};
    }

    .skill-set {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-content: center;
      gap: ${theme.spaces.largeDesktop.half_section};
      justify-content: space-between;
      position: relative;

        &::before {
          content: '';
          width: 100%;
          height: 1px;
          background: ${theme.colors.grey};
          position: absolute;
          top: 50%;
          left: 0;
          z-index: -1;
        }

      h3 {
        margin: auto 0 30px 0;
        padding: 0;
        line-height: 1em;
      }

      &__grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        gap: -2px;
        position: relative;

        &__item {
          padding: 10px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          vertical-align: middle;
          position: relative;
          z-index: 1;
          border: 1px solid ${theme.colors.grey};
          border-right: 0;
          background: ${theme.colors.dark};


          &:last-child {
            border-right: 1px solid ${theme.colors.grey};
          }

          img {
            width: auto;
            height: 45px;
            max-width: 45px;
            max-height: 45px;
            margin: auto;
            padding: 0;
            vertical-align: middle;
          }

          span {
            width: calc(100% + 2px);
            height: auto;
            padding: 5px 0;
            background: ${theme.colors.grey};
            color: ${theme.colors.dark};
            text-align: center;
            display: inline-block;
            position: absolute;
            top: 0;
            left: -1px;
            transform: translateY(-100%);
            font-size: 8px;
            line-height: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            wrap: wrap;
          }

          &:nth-child(even) span {
            top: 100%;
            transform: translateY(1px);
          }
        }
      }
    }
  }
`;

const Skills = () => {
  const { language } = useLanguage();
  const [displayedLanguage, setDisplayedLanguage] = useState(language);

  useEffect(() => {
    if (language !== displayedLanguage) {
      setDisplayedLanguage(language);
    }
  }, [language, displayedLanguage]);

  return (
    <div css={skillsStyles}>
      <div id="section-skills">
        <h2>{skillsContent.textHeader[displayedLanguage]}</h2>
        {skillsData.map((category, index) => (
          <div key={index} className="skill-set">
            <h3>{skillsContent[category.category][displayedLanguage]}</h3>
            <div className="skill-set__grid">
            {category.skills.map((skill, i) => {
              const IconComponent = skillIcons[skill.name];
              return (
                <div key={i} className="skill-set__grid__item">
                  {IconComponent ? <IconComponent width={50} height={50} color="#fff" /> : null}
                  <span>{skill.name}</span>
                </div>
              );
            })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
