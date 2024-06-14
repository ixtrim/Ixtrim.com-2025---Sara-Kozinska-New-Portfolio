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
    z-index: 2;
  
    svg {
      margin: 0 auto;
      display: inline-block;
      vertica-align: middle;
    }

    &__first-name {
      position: absolute;
      bottom: 5px;
      left: 29px;
      display: inline-block;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.orange};
    }

    &__last-name {
      position: absolute;
      bottom: 20px;
      left: 116px;
      display: inline-block;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.orange};
    }

    &__first-name,
    &__last-name {
      &::first-letter {
        opacity: 0;
      }
    }

    &__welcome {
      width: 100%;
      text-align: center;
      display: inline-block;
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes.xxlarge};
      line-height: 1.2;
      color: ${theme.colors.orange};
      letter-spacing: 1px;
      margin: ${theme.spaces.largeDesktop.elements} 0 0 0;
      padding: 0;
      position: relative;
    }

    &__introduction {
      width: 100%;
      text-align: center;
      display: inline-block;
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes.xxxlarge};
      font-weight: ${theme.fontWeights.normal};
      line-height: 1.2;
      color: ${theme.colors.orange};
      letter-spacing: 1px;
      margin: 0;
      padding: 0;
      position: relative;
    }

    &__invitation {
      width: 100%;
      text-align: center;
      display: inline-block;
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes.xlarge};
      line-height: 1.2;
      color: ${theme.colors.orange};
      letter-spacing: 1px;
      margin: 0;
      padding: 0;
      position: relative;
    }

  }
`;

const Hero = () => {
  const [language, setLanguage] = useState('ENG');
  const heroTextContent = {
    ENG: "Hello!/nI am Sara, a software developer based in Barcelona. Welcome on my website!",
    ES: "Soy Sara, una desarrolladora de software afincada en Barcelona. ¡Bienvenidos a mi sitio web!",
    PL: "Jestem Sara, software developer osadzona w Barcelonie. Witaj na mojej stronie internetowej!",
  };

  const textContentRef = useRef(null);

  useEffect(() => {
    if (textContentRef.current) {
      const split = new SplitText(textContentRef.current, { type: "chars, words, lines" });
      const timeline = gsap.timeline();
      
      timeline.set(textContentRef.current, { perspective: 400 })
        .from(split.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 })
        .to(split.words, { duration: 0.1, color: "#5b5b5c", scale: 0.9, stagger: 0.1 }, "words")
        .to(split.words, { duration: 0.2, color: "white", scale: 1, stagger: 0.1 }, "words+=0.1");
    }
  }, [language]);

  return (
    <div id="section-hero" css={contentStyles}>
      <div className="branding">
          <Logo />
          <span className="branding__first-name">Sara</span>
          <span className="branding__last-name">Kozińska</span>
        </div>
        <span className="branding__welcome">Hello!</span>
        <h1 ref={textContentRef} className="branding__introduction">My name is Sara Kozińska, a remote software developer based on the sunny side of the world.</h1>
        <span className="branding__invitation">I am happy to welcome you on my website!</span>
    </div>
  );
};

export default Hero;
