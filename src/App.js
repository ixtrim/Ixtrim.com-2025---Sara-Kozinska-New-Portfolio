/** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './theme';
import { LanguageProvider } from './contexts/LanguageContext';
import Background from './components/layout/Background';
import ExternalLinks from './components/layout/ExternalLinks';
import Languages from './components/layout/Languages';
import Menu from './components/layout/Menu';
import Hero from './components/content/Hero';
import About from './components/content/About';
import Skills from './components/content/Skills';
import Portfolio from './components/content/Portfolio';
import Clients from './components/content/Clients';
import Experience from './components/content/Experience';
import Education from './components/content/Education';
import Contact from './components/content/Contact';
import Footer from './components/layout/Footer';
import Cursor from './components/layout/Cursor';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700;800&family=Lancelot&display=swap');

  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.base};
    letter-spacing: 1px;
    line-height: 1.5em;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    overflow-x: hidden;

    & > *,
    & > button {
      font-family: ${theme.fonts.body};
    }
  }
`;

const appContainerStyles = css`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
  display: block;

  & *,
  a,
  button {
  }
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Global styles={globalStyles} />
        <Background />
        <div css={appContainerStyles}>
          <Languages />
          <Menu />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Clients />
          <Experience />
          <Education />
          <Contact />
          <Footer />
          <ExternalLinks />
          <Cursor />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

