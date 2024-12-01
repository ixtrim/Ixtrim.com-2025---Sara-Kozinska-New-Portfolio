/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import Logo from './Logo';
import CubeButton from '../../common/CubeButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { animateFadeAndSlide } from '@/utils/animations';

gsap.registerPlugin(SplitText);

const contentStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto ${theme.spaces.largeDesktop.section};
  padding: ${theme.spaces.largeDesktop.elements} 0 0 0;
  text-align: left;
  color: ${theme.colors.white};

  .branding {
    width: 150px;
    margin: 0;
    padding: 0;
    position: relative;
    text-align: center;
    transition: opacity 0.3s ease-in-out;
    z-index: 2;

    svg {
      margin: 0 auto;
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      animation: pulse 3s ease-in-out infinite;
    }

    &__first-name {
      position: absolute;
      bottom: 0px;
      left: 30px;
      display: inline-block;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.orange};
      
      &::first-letter {
        opacity: 0;
      }
    }

    &__last-name {
      position: absolute;
      bottom: 15px;
      left: 118px;
      display: inline-block;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.orange};
      
      &::first-letter {
        opacity: 0;
      }
    }
  }

  .welcome {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: ${theme.spaces.largeDesktop.elements} 0 0 0;
    padding: 0;
    text-align: center;
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xxlarge};
    line-height: 1.2;
    color: ${theme.colors.orange};
    letter-spacing: 1px;
  }

  .introduction {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xxxlarge};
    font-weight: ${theme.fontWeights.normal};
    line-height: 1.2;
    color: ${theme.colors.white};
    letter-spacing: 1px;
  }

  .invitation {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xlarge};
    line-height: 1.2;
    color: ${theme.colors.orange};
    letter-spacing: 1px;
  }

  figure.cube-btn {
    width: 150px;
    height: 50px;
    cursor: pointer;
    perspective: 500px;
    margin: 0;
    padding: 0;
    display: inline-block;

    div {
      height: 100%;
      transform-style: preserve-3d;
      transition: 0.25s;
    }

    span {
      width: 100%;
      height: 100%;
      position: absolute;
      box-sizing: border-box;
      border: 2px solid ${theme.colors.grey};
      font-family: ${theme.fonts.heading};
      line-height: 50px;
      font-size: 17pt;
      text-align: center;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        color: #fff;
        transform: translate3d(0, 0, 30px);
      }

      &:nth-child(2) {
        color: $color;
        border: 2px solid ${theme.colors.orange};
        background: ${theme.colors.orange};
        transform: rotateX(90deg) translate3d(0, 0, 30px);
        opacity: 0;
      }
    }

    &:hover {
      div {
        transform: rotateX(-90deg);
      }

      span:nth-child(2) {
        opacity: 1;
      }
    }
  }

  ul {
    width: 100%;
    margin: calc(${theme.spaces.largeDesktop.elements}/2) 0 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: calc(${theme.spaces.largeDesktop.elements}/2);
    list-style-type: none;

    a,
    & > * {
      font-family: ${theme.fonts.heading};
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    
    50% {
      opacity: .65;
    }
    
    100% {
      opacity: 1;
    }
  }
`;

const Hero = () => {
  const { language, content } = useLanguage();
  const [displayedLanguage, setDisplayedLanguage] = useState(language);

  const textHelloRef = useRef(null);
  const textHeadingRef = useRef(null);
  const textSubheadingRef = useRef(null);

  const heroContent = {
    textHello: {
      ENG: ["Hello!"],
      ES: ["Benvenidos!"],
      PL: ["Witaj!"]
    },
    textHeadline: {
      ENG: ["My name is Sara Kozińska, a software developer based on the sunny side of the world."],
      ES: ["Mi nombre es Sara Kozińska, una desarrolladora de software basada en el lado soleado del mundo."],
      PL: ["Nazywam sie Sara Kozińska, software developer mieszkajaca po slonecznej stronie globu."]
    },
    textSubheadline: {
      ENG: ["I am happy to welcome you on my website!"],
      ES: ["¡Estoy feliz de darle la bienvenida a mi sitio web!"],
      PL: ["Cieszę się, że odwiedziłeś moją stronę!"]
    }
  };

  useEffect(() => {
    if (language !== displayedLanguage) {
      const elements = [
        textHelloRef.current,
        textHeadingRef.current,
        textSubheadingRef.current,
      ];

      animateFadeAndSlide(elements, () => {
        setDisplayedLanguage(language);
      });
    }
  }, [language, displayedLanguage]);

  return (
    <div 
      id="section-hero" 
      css={contentStyles}
    >
      <div className="branding">
        <Logo className="regular-link" />
        <span className="branding__first-name">Sara</span>
        <span className="branding__last-name">Kozińska</span>
      </div>
      <span ref={textHelloRef} className="welcome">{heroContent['textHello'][displayedLanguage]}</span>
      <h1 ref={textHeadingRef} className="introduction regular-link">
        {heroContent['textHeadline'][displayedLanguage]}
      </h1>
      <span ref={textSubheadingRef} className="invitation">{heroContent['textSubheadline'][displayedLanguage]}</span>
      <ul>
        <li>
          <CubeButton textOne="Resume" textTwo="Open resume" linkValue="http://ixtrim.com" linkTarget="_blank" variant="btn--standard regular-link" />
        </li>
        <li>
          <CubeButton textOne="Contact Me" textTwo="Send e-mail" linkValue="http://ixtrim.com" linkTarget="_blank" variant="btn--full regular-link" />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
