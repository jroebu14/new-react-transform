const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  entry: [
    path.join(__dirname, 'src', 'polyfill.js'),
    path.join(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: '3',
                  targets: {
                    browsers: [
                      'chrome >= 53',
                      'firefox >= 45.0',
                      'ie >= 11',
                      'edge >= 37',
                      'safari >= 9',
                      'opera >= 40',
                      'op_mini >= 18',
                      'Android >= 7',
                      'and_chr >= 53',
                      'and_ff >= 49',
                      'ios_saf >= 10',
                    ],
                  },
                },
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
