/** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './theme';
import VideoBackground from './components/layout/VideoBackground';
import ExternalLinks from './components/layout/ExternalLinks';
import Menu from './components/layout/Menu';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

const globalStyles = css`
  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.base};
    letter-spacing: 1px;
    line-height: 1.5em;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
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
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <VideoBackground />
      <div css={appContainerStyles}>
        <Menu />
        <Content />
        <Footer />
        <ExternalLinks />
      </div>
    </ThemeProvider>
  );
}

export default App;

