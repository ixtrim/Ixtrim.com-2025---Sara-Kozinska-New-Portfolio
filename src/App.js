import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './theme'; // Ensure this path is correct

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            font-family: ${theme.fonts.body};
            background-color: ${theme.colors.background};
            color: ${theme.colors.text};
          }
        `}
      />
      <div className="App">
        My APP
      </div>
    </ThemeProvider>
  );
}

export default App;
