/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { useLanguage } from '@/contexts/LanguageContext';
import { animateFadeAndSlide } from '@/utils/animations';
import WhatsAppIcon from '@/icons/WhatsAppIcon';
import TelegramIcon from '@/icons/TelegramIcon';
import SkypeIcon from '@/icons/SkypeIcon';

const contactStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    margin: ${theme.spaces.largeDesktop.section} 0;

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
      font-size: ${theme.fontSizes.xxlarge};
      color: ${theme.colors.orange};
    }

    h3 {
      font-size: ${theme.fontSizes.xxxlarge};
      color: ${theme.colors.white};
      text-align: right;
    }

    .reach-out {
      margin: ${theme.spaces.largeDesktop.elements} 0 0 0;
      padding: 0;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;

        li {
          margin: 0;
          padding: 0;
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.large};
          font-weight: ${theme.fontWeights.normal};
          line-height: 1.2;
          color: ${theme.colors.white};
          letter-spacing: 1px;

          a {
            text-decoration: none;
            color: ${theme.colors.orange};
            transition: color 0.3s;

            &:hover {
              color: ${theme.colors.red};
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const { language, content } = useLanguage();
  const [displayedLanguage, setDisplayedLanguage] = useState(language);

  const textCTARef = useRef(null);
  const textContentRef = useRef(null);
  const textCallRef = useRef(null);

  const contactContent = {
    textCTA: {
      ENG: ["I'd love to talk!"],
      ES: ["¡Me encantaría hablar!"],
      PL: ["Bardzo chętnie porozmawiam!"]
    },
    textContent: {
      ENG: ["Whether you have a question, quote or just want to chat — shoot me a message."],
      ES: ["Si tienes alguna pregunta, una oferta o simplemente quieres saludarme, escríbeme."],
      PL: ["Jeśli masz zapytanie, ofertę lub po prostu chcesz powiedzieć cześć — napisz do mnie."]
    },
    textCall: {
      ENG: ["Schedule a call with me!"],
      ES: ["¡Agenda una llamada conmigo!"],
      PL: ["Zaplanujmy rozmowę on-line."]
    }
  };

  useEffect(() => {
    if (language !== displayedLanguage) {
      const elements = [
        textCTARef.current,
        textContentRef.current,
        textCallRef.current
      ];

      animateFadeAndSlide(elements, () => {
        setDisplayedLanguage(language);
      });
    }
  }, [language, displayedLanguage]);

  return (
    <div css={contactStyles}>
      <div id="section-contact">
        <h2 ref={textCTARef}>{contactContent['textCTA'][displayedLanguage]}</h2>
        <h3 ref={textContentRef}>{contactContent['textContent'][displayedLanguage]}</h3>
        <div className="reach-out">
          <ul>
            <li>
              <a href="mailto:contact@ixtrim.com">contact@ixtrim.com</a>
            </li>
            <li>
              <a href="tel:+34664426794">+34 664 42 67 94</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=0034664426794&text=Hello%20Sara!">
                <WhatsAppIcon className="regular-link" width={30} height={30} color="#fff" />
              </a>
            </li>
            <li>
              <a href="https://telegram.me/sara_kozinska">
                <TelegramIcon className="regular-link" width={30} height={30} color="#fff" />
              </a>
            </li>
            <li>
              <a href="skype:ixtrim.girl?chat">
                <SkypeIcon className="regular-link" width={30} height={30} color="#fff" />
              </a>
            </li>
            <li>
              <a href="https://calendly.com/sarakozinska/job-project-interview" target="_blank" ref={textCallRef}>{contactContent['textCall'][displayedLanguage]}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
