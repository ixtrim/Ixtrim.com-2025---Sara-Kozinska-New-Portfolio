/** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './theme';
import VideoBackground from './components/layout/VideoBackground';
import Link from './components/common/Link';
import Button from './components/common/Button';

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
        {/* Your content */}
        <center>
          {/* Example content and components */}
          <p>Whoever you are, your presence here means that I may have (or be) something you are looking for...</p>
          <Button variant="outlined" size="medium" onClick={() => console.log('Clicked!')}>
            Click Me
          </Button>
          <Link href="https://example.com" target="_blank" rel="noopener noreferrer" title="Example Site" variant="white" size="medium">
            Visit Example Site
          </Link>
        </center>
      </div>
    </ThemeProvider>
  );
}

export default App;

