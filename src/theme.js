const theme = {
  colors: {
    dark: '#141516',
    darkgrey: '#ffffff0d',
    grey: '#5b5b5c',
    orange: '#fdb32b',
    red: '#ed1d23',
    white: '#ffffff',
  },
  fonts: {
    body: "'Public Sans', sans-serif",
    heading: "'Lancelot', cursive",
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem',
  },
  fontWeights: {
    normal: 400, 
    medium: 500,
    bold: 700,
    extraBold: 800,
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 480px)',
    tablet: 'only screen and (min-width: 481px) and (max-width: 768px)',
    notebook: 'only screen and (min-width: 769px) and (max-width: 990px)',
    desktop: 'only screen and (min-width: 991px) and (max-width: 1200px)',
    large: 'only screen and (min-width: 1201px)',
  },
};

export default theme;
