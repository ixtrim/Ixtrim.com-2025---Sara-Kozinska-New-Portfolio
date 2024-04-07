/** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './theme';
import VideoBackground from './components/layout/VideoBackground';
import ExternalLinks from './components/layout/ExternalLinks';
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
  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.base};
    letter-spacing: 1px;
    line-height: 1.5em;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    overflow-x: hidden;
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
      <Global styles={globalStyles} />
      <VideoBackground />
      <div css={appContainerStyles}>
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
    </ThemeProvider>
  );
}

export default App;

