const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    configure: (webpackConfig) => {
      if (!webpackConfig.ignoreWarnings) {
        webpackConfig.ignoreWarnings = [];
      }
      
      // Add a condition to ignore specific warnings.
      webpackConfig.ignoreWarnings.push(/Failed to parse source map/);
      
      return webpackConfig;
    },
  },
};