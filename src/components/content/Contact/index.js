/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import theme from '@/theme';
import { useLanguage } from '@/contexts/LanguageContext';
import { animateFadeAndSlide } from '@/utils/animations';

const contactStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};

  & > div {
    margin: 100px 0;
  }
`;

const Contact = () => {
  const { language, content } = useLanguage();
  const [displayedLanguage, setDisplayedLanguage] = useState(language);

  const contactContent = {
    textHello: {
      ENG: ["I'd really love to hear from you!"],
      ESP: ["¡Me encantaría saber de ti!"],
      PL: ["Chetnie uslysze Twoja opinie!"],
    },
    textMore: {
      ENG: ["Whether you have a question, quote or just want to chat about code — shoot me a message."],
      ESP: ["Ya sea que tengas una pregunta, una cotización o simplemente quieras charlar sobre código, envíame un mensaje."],
      PL: ["Czy masz pytanie, ofertę lub po prostu chcesz porozmawiać o kodzie? Napisz do mnie."],
    },
  };

  return (
    <div css={contactStyles}>
      <div id="section-contact">
        <h2>{contactContent.textHello[displayedLanguage]}</h2>
        <h3>{contactContent.textMore[displayedLanguage]}</h3>
        <div className="contact-links">
          <h4>Contant me on: </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
