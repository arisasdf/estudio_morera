// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const path = require('path');
const { generateWebpackConfig, inliningCss } = require('shakapacker');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

const webpackConfig = generateWebpackConfig({
  plugins: [new ForkTSCheckerWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      "@rosarium": path.resolve(__dirname, "../../", 'app/javascript/components/rosarium/'),
      "@components": path.resolve(__dirname, "../../", 'app/javascript/components/'),
    },
  }
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