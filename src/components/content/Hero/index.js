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
  margin: 0 auto;
  padding: 100px 0 0 0;
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

    .first-name {
      position: absolute;
      bottom: 5px;
      left: 29px;
      display: inline-block;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.orange};
    }

    .last-name {
      position: absolute;
      bottom: 20px;
      left: 116px;
      display: inline-block;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.orange};
    }

    .first-name,
    .last-name {
      &::first-letter {
        opacity: 0;
      }
    }
  }

  .text-content {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5em;
  }
`;

const Hero = () => {
  const [language, setLanguage] = useState('ENG');
  const heroTextContent = {
    ENG: "I am Sara, a software developer based in Barcelona. Welcome on my website!",
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
        .to(split.words, { duration: 0.1, color: "#8FE402", scale: 0.9, stagger: 0.1 }, "words")
        .to(split.words, { duration: 0.2, color: "white", scale: 1, stagger: 0.1 }, "words+=0.1");
    }
  }, [language]);

  return (
    <div id="section-hero" css={contentStyles}>
      <div className="branding">
          <Logo />
          <span className="first-name">Sara</span>
          <span className="last-name">Kozińska</span>
        </div>
        <h1 ref={textContentRef} className="text-content">{heroTextContent[language]}</h1>
    </div>
  );
};

export default Hero;
