/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { useLanguage } from '@/contexts/LanguageContext';
import { animateFadeAndSlide } from '@/utils/animations';
import saraImage from '@/assets/images/sara-kozinska.webp';

const aboutStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
  }

  .picture {
    position: relative;

    &__outline {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.95s;
    }

    &:hover .picture__outline {
      opacity: 1;
    }

    &__shape {
      position: relative;
      width: 400px;
      height: 400px;
      flex-shrink: 0;
      clip-path: polygon(50% 100%, 100% 62%, 82% 0%, 18% 0%, 0% 62%);
      overflow: hidden;
      transform-origin: center;
      transition: transform 0.5s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: center;
        transition: transform 0.5s;
      }

      &:hover {
        transform: scale(0.85);

        img {
          transform: scale(1.35);
        }
      }
    }
  }

  .content {
    h2 {
      margin: 0 0 ${theme.spaces.largeDesktop.heading} 0;
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes.xxlarge};
      font-weight: ${theme.fontWeights.normal};
      color: ${theme.colors.orange};
      line-height: 1em;
      letter-spacing: 1px;
    }

    p {
      margin: 0 0 ${theme.spaces.largeDesktop.paragraph} 0;
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes.medium};
      font-weight: ${theme.fontWeights.normal};
      line-height: 1.5em;
      color: ${theme.colors.white};
      letter-spacing: 1px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

const About = () => {
  const { language, content } = useLanguage();
  const [displayedLanguage, setDisplayedLanguage] = useState(language);

  const textHeaderRef = useRef(null);
  const textPFirstRef = useRef(null);
  const textPSecondRef = useRef(null);
  const textPThirdRef = useRef(null);

  const aboutContent = {
    textHeader: {
      ENG: ["About Me"],
      ES: ["Sobre Mí"],
      PL: ["O Mnie"]
    },
    textPFirst: {
      ENG: ["Hi, I’m Sara Kozińska! Born in Warsaw, now soaking up the sun in Barcelona with my endlessly stubborn French bulldog, Lilo."],
      ES: ["¡Hola! Soy Sara Kozińska. Nací en Varsovia, pero ahora disfruto del sol en Barcelona con mi testarudo bulldog francés, Lilo."],
      PL: ["Cześć! Jestem Sara Kozińska. Urodziłam się w Warszawie, ale teraz cieszę się słońcem w Barcelonie razem z moim upartym buldogiem francuskim, Lilo."]
    },
    textPSecond: {
      ENG: ["When I’m not deep in code, you’ll find me surfing, cutting through water on a wakeboard, or carving snow on a snowboard. I love a good mystery book, original films, live music, learning drums, and experimenting in the kitchen."],
      ES: ["Cuando no estoy metida en código, me encontrarás surfeando, deslizándome sobre el agua en wakeboard o trazando líneas en la nieve con mi snowboard. Me apasionan los buenos libros de misterio, el cine original, la música en vivo, aprender a tocar la batería y experimentar en la cocina."],
      PL: ["Kiedy nie programuję, można mnie spotkać nad morzem, pływając na wakeboardzie lub szusując na snowboardzie. Uwielbiam dobre książki kryminalne, oryginalne filmy, muzykę na żywo, naukę gry na perkusji i eksperymentowanie w kuchni."]
    },
    textPThird: {
      ENG: ["I’m always looking for ways to optimize life—whether through bio-hacking, new challenges, or simply making the most of every day."],
      ES: ["Siempre busco maneras de optimizar la vida, ya sea a través del biohacking, nuevos retos o simplemente sacándole el máximo provecho a cada día."],
      PL: ["Zawsze szukam sposobów na optymalizację życia – czy to poprzez biohacking, nowe wyzwania, czy po prostu czerpanie maksimum z każdego dnia."]
    }
  };

  useEffect(() => {
    if (language !== displayedLanguage) {
      const elements = [
        textHeaderRef.current,
        textPFirstRef.current,
        textPSecondRef.current,
        textPThirdRef.current
      ];

      animateFadeAndSlide(elements, () => {
        setDisplayedLanguage(language);
      });
    }
  }, [language, displayedLanguage]);

  return (
    <div css={aboutStyles}>
      <div id="section-about">

        <div className="picture">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="picture__outline">
            <polygon 
              points="200,400 400,250 330,0 70,0 0,250"
              stroke={theme.colors.grey} 
              strokeWidth="1" 
              fill="none"
            />
          </svg>
          <div className="picture__shape">
            <img src={saraImage}  alt="Sara Kozińska" />
          </div>
        </div>

        <div className="content">
          <h2 ref={textHeaderRef}>{aboutContent['textHeader'][displayedLanguage]}</h2>
          <p ref={textPFirstRef}>{aboutContent['textPFirst'][displayedLanguage]}</p>
          <p ref={textPSecondRef}>{aboutContent['textPSecond'][displayedLanguage]}</p>
          <p ref={textPThirdRef}>{aboutContent['textPThird'][displayedLanguage]}</p>
        </div>
      
        
      </div>
    </div>
  );
};

export default About;
