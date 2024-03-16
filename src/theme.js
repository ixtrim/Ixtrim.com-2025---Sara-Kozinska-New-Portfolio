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
    base: '14px',
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
    xs: '480px',
    sm: '768px',
    md: '990px',
    lg: '1200px',
  },
  buttonSizes: {
    small: {
      padding: '8px 12px',
      fontSize: '14px',
    },
    medium: {
      padding: '10px 16px',
      fontSize: '16px', // Ensure this matches what you're trying to access
    },
    large: {
      padding: '12px 20px',
      fontSize: '18px',
    },
  },
};

export default theme;
