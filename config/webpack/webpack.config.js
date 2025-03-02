// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig, inliningCss } = require('shakapacker');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

const webpackConfig = generateWebpackConfig({
  plugins: [new ForkTSCheckerWebpackPlugin()],
});

if (isDevelopment && inliningCss) {
  webpackConfig.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: webpackConfig.devServer.port,
      },
    })
  );
}

module.exports = webpackConfig;