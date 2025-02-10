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

      const svgRuleIndex = webpackConfig.module.rules.findIndex(rule =>
        rule.test && rule.test.toString().includes('svg')
      );

      if (svgRuleIndex !== -1) {
        webpackConfig.module.rules[svgRuleIndex] = {
          test: /\.svg$/,
          use: ['file-loader'],
        };
      }
      
      return webpackConfig;
    },
  },
};