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
      fontSize: '11px',
    },
    medium: {
      padding: '12px 20px',
      fontSize: '13px',
    },
    large: {
      padding: '16px 35px',
      fontSize: '13px',
    },
  },
  buttonVariants: {
    outlined: {
      background: 'transparent',
      color: 'white',
      border: '2px solid #ffffff',
      hoverBackground: '#ffffff',
      hoverColor: '#141516',
      hoverBorder: '2px solid #ffffff',
    },
    red: {
      background: '#ed1d23',
      color: '#ffffff',
      border: 'none',
      hoverBackground: '#fdb32b',
      hoverColor: '#141516',
      hoverBorder: 'none',
    },
    orange: {
      background: '#fdb32b',
      color: '#141516',
      border: 'none',
      hoverBackground: '#ffffff',
      hoverColor: '#141516',
      hoverBorder: 'none',
    },
    grey: {
      background: '#5b5b5c',
      color: '#ffffff',
      border: 'none',
      hoverBackground: '#141516',
      hoverColor: '#fdb32b',
      hoverBorder: 'none',
    },
  },
  linkSizes: {
    small: {
      fontSize: '11px',
    },
    medium: {
      fontSize: '13px',
    },
    large: {
      fontSize: '16px',
    },
  },
  linkVariants: {
    white: {
      color: 'white',
      hoverColor: '#fdb32b',
    },
    red: {
      color: '#ed1d23',
      hoverColor: '#ffffff',
    },
    orange: {
      color: '#fdb32b',
      hoverColor: '#ffffff',
    },
    grey: {
      color: '#5b5b5c',
      hoverColor: '#fdb32b',
    },
  },
};

export default theme;
