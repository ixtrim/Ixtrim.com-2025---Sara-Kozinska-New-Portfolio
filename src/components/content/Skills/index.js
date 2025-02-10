/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';

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
  return (
    <div css={skillsStyles}>
      <div id="section-skills">
        <h2>Tech Stack & Tools</h2>

        <div className="skill-set">
          <h3>Frontend Development</h3>
          <div class="skill-set__grid">
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>React</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>React Native</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="JavaScript" />
              <span>Vue.js</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="JavaScript" />
              <span>Tailwind CSS</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" alt="JavaScript" />
              <span>GSAP</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="JavaScript" />
              <span>Bootstrap</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="JavaScript" />
              <span>SASS</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="JavaScript" />
              <span>TypeScript</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        <div className="skill-set">
          <div class="skill-set__grid">
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>PHP</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>WordPress</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="JavaScript" />
              <span>Drupal</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="JavaScript" />
              <span>Joomla</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" alt="JavaScript" />
              <span>Prestashop</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="JavaScript" />
              <span>Laravel</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="JavaScript" />
              <span>Symfony</span>
            </div>
          </div>
          <h3>Backend & CMS</h3>
        </div>

        <div className="skill-set">
          <h3>Databases & APIs</h3>
          <div class="skill-set__grid">
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>MySQL</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>Firebase</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="JavaScript" />
              <span>REST API</span>
            </div>
          </div>
        </div>

        <div className="skill-set">
          <div class="skill-set__grid">
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>Capacitor</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>Flutter</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="JavaScript" />
              <span>Bubble.io</span>
            </div>
          </div>
          <h3>Mobile & No-Code Development</h3>
        </div>

        <div className="skill-set">
        <h3>E-commerce & Integrations</h3>
          <div class="skill-set__grid">
            <div class="skill-set__grid__item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>WooCommerce</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>Shopify</span>
            </div>
            <div class="skill-set__grid__item">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="JavaScript" />
              <span>Prestashop</span>
            </div>
          </div>
        </div>

<div className="skill-set">
  <div class="skill-set__grid">
    <div class="skill-set__grid__item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>Git</span>
    </div>
    <div class="skill-set__grid__item">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>CI/CD</span>
    </div>
    <div class="skill-set__grid__item">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="JavaScript" />
              <span>Docker</span>
    </div>
  </div>
  <h3>DevOps & Version Control</h3>
</div>

<div className="skill-set">
<h3>Testing & Debugging</h3>
  <div class="skill-set__grid">
    <div class="skill-set__grid__item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="JavaScript" />
              <span>Cypress</span>
    </div>
    <div class="skill-set__grid__item">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>Lighthouse</span>
    </div>
    <div class="skill-set__grid__item">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>PageSpeed Insights</span>
    </div>
    <div class="skill-set__grid__item">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="JavaScript" />
              <span>GTmetrix</span>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Skills;
