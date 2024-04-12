/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText);

const contentStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    margin: 100px 0;
  }

  .text-content {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5em;
    opacity: 0; // Start with text content hidden
  }
`;

const Hero = () => {
  const [language, setLanguage] = useState('ENG');
  const heroTextContent = {
    ENG: "Software Developer",
    ES: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    PL: "Programista",
  };

  // Ref for the text content to apply animation
  const textContentRef = useRef(null);

  useEffect(() => {
    // Ensure the DOM element is available and prevent re-animating on initial render
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
    <div css={contentStyles}>
      <br /><br />
      <div id="section-hero">
        LOGO
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 ref={textContentRef} className="text-content">{heroTextContent[language]}</h1>

      </div>
      {/* Example language switcher buttons */}
      <button onClick={() => setLanguage('ENG')}>ENG</button>
      <button onClick={() => setLanguage('ES')}>ES</button>
      <button onClick={() => setLanguage('PL')}>PL</button>
    </div>
  );
};

export default Hero;