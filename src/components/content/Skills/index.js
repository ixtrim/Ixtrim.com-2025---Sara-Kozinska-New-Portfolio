/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { useLanguage } from '@/contexts/LanguageContext';

// Dynamically import all SVG icons from skills folder
const importIcons = require.context('@/assets/images/skills', false, /\.svg$/);

// Helper function to get icon paths
const getIcon = (iconName) => {
  try {
    return importIcons(`./${iconName}`).default;
  } catch (error) {
    console.error(`Icon not found: ${iconName}`);
    return null;
  }
};

// Skills Data with dynamic icon loading
const skillsData = [
  {
    category: "textSubHeaderFirst",
    skills: [
      { name: "React", icon: getIcon("react.svg") },
      { name: "Vue.js", icon: getIcon("vue.svg") },
      { name: "Tailwind CSS", icon: getIcon("tailwind.svg") },
      { name: "GSAP", icon: getIcon("gsap.svg") },
      { name: "Bootstrap", icon: getIcon("bootstrap.svg") },
      { name: "SASS", icon: getIcon("sass.svg") },
      { name: "TypeScript", icon: getIcon("typescript.svg") },
    ],
  },
  {
    category: "textSubHeaderSecond",
    skills: [
      { name: "WordPress", icon: getIcon("wordpress.svg") },
      { name: "Laravel", icon: getIcon("laravel.svg") },
    ],
  },
  {
    category: "textSubHeaderThird",
    skills: [
      { name: "MySQL", icon: getIcon("mysql.svg") },
      { name: "Firebase", icon: getIcon("firebase.svg") },
      { name: "REST API", icon: getIcon("rest-api.svg") },
    ],
  },
  {
    category: "textSubHeaderFourth",
    skills: [
      { name: "Capacitor", icon: getIcon("capacitor.svg") },
      { name: "Flutter", icon: getIcon("flutter.svg") },
    ],
  },
  {
    category: "textSubHeaderFifth",
    skills: [
      { name: "WooCommerce", icon: getIcon("woocommerce.svg") },
      { name: "Shopify", icon: getIcon("shopify.svg") },
    ],
  },
  {
    category: "textSubHeaderSixth",
    skills: [
      { name: "Git", icon: getIcon("git.svg") },
      { name: "Docker", icon: getIcon("docker.svg") },
      { name: "CI/CD", icon: getIcon("cicd.svg") },
      { name: "GitLab", icon: getIcon("gitlab.svg") },
    ],
  },
  {
    category: "textSubHeaderSeventh",
    skills: [
      { name: "Cypress", icon: getIcon("cypress.svg") },
      { name: "Lighthouse", icon: getIcon("lighthouse.svg") },
      { name: "PageSpeed Insights", icon: getIcon("pagespeed.svg") },
    ],
  },
];

// Translations
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
        margin: auto 0 27px 0;
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
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-set__grid__item">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
