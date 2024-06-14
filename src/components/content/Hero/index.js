/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import Logo from './Logo'; // Adjust the import path as necessary

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

    &__welcome {
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

    &__introduction {
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

    &__invitation {
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
  const [language, setLanguage] = useState('ENG');
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);
  const heroTextContent = {
    ENG: "Hello!/nI am Sara, a software developer based in Barcelona. Welcome on my website!",
    ES: "Soy Sara, una desarrolladora de software afincada en Barcelona. ¡Bienvenidos a mi sitio web!",
    PL: "Jestem Sara, software developer osadzona w Barcelonie. Witaj na mojej stronie internetowej!",
  };

  const textContentRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => {
        if (textContentRef.current) {
          const split = new SplitText(textContentRef.current, { type: "chars, words, lines" });
          const timeline = gsap.timeline();
          
          timeline.set(textContentRef.current, { perspective: 400 })
            .from(split.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 })
            .to(split.words, { duration: 0.1, color: "#fdb32c", scale: 0.9, stagger: 0.1 }, "words")
            .to(split.words, { duration: 0.2, color: "white", scale: 1, stagger: 0.1 }, "words+=0.1");
        }
      }, 3000);
      setHoverTimer(timer);
    } else if (hoverTimer) {
      clearTimeout(hoverTimer);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isHovered, language]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
  };

  return (
    <div 
      id="section-hero" 
      css={contentStyles} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="branding">
        <Logo />
        <span className="branding__first-name">Sara</span>
        <span className="branding__last-name">Kozińska</span>
      </div>
      <span className="branding__welcome" onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Hello!</span>
      <h1 ref={textContentRef} className="branding__introduction regular-link">My name is Sara Kozińska, a remote software developer based on the sunny side of the world.</h1>
      <span className="branding__invitation">I am happy to welcome you on my website!</span>
    </div>
  );
};

export default Hero;
