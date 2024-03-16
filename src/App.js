import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './theme';
import VideoBackground from './components/layout/VideoBackground';
import Button from './components/common/Button';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes.base};
            letter-spacing: 1px;
            line-height: 1.5em;
            background-color: ${theme.colors.dark};
            color: ${theme.colors.white};
          }
        `}
      />
      <VideoBackground />
      <div className="App">
        <p>Whoever you are, your presence here means that I may have (or be) something you are looking for. But before we get down to business, let me introduce myself.</p>

        <p>My name is Sara Kozińska. I was born on 21.10.1987 in Warsaw, Poland. Currently I live in sunny Barcelona, Spain, where I live with my stubborn (but still cute) French bulldog Lilo.</p>

        <p>Since I can remember I have 3 passions: animals, boards (skateboard, snowboard, wakeboard, surfing...) and computers. To this day they are all part of my life. Over time, other interesting things were added, such as cooking (Mexican and Asian cuisine), drumming, music, filmmaking, traveling and self-development (spiritual development).</p>

        <Button variant="outlined" size="small" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
<br/><br/>
        <Button variant="outlined" size="medium" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="outlined" size="large" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="red" size="small" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
<br/><br/>
        <Button variant="red" size="medium" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="red" size="large" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="orange" size="small" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
<br/><br/>
        <Button variant="orange" size="medium" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="orange" size="large" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="grey" size="small" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
<br/><br/>
        <Button variant="grey" size="medium" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        <Button variant="grey" size="large" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
        <br/><br/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
