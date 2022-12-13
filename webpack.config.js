const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ListOfAlias = {
  '@components': path.resolve(__dirname, 'src/components/'),
  '@containers': path.resolve(__dirname, 'src/containers/'),
  '@pages': path.resolve(__dirname, 'src/pages/'),
  '@routes': path.resolve(__dirname, 'src/routes/'),
  '@styles': path.resolve(__dirname, 'src/styles/'),
  '@icons': path.resolve(__dirname, 'src/assets/icons/'),
  '@logos': path.resolve(__dirname, 'src/assets/logos/'),
};

const listOfRules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    },
  },
  {
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  },
  {
    test: /\.(css|scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    type: 'asset',
  },
];

const listOfPlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    filename: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
];

module.exports = (env, { mode }) => {
  const isProduction = mode === 'production';

  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: ListOfAlias,
    },
    module: { rules: listOfRules },
    plugins: listOfPlugins,
    devServer: {
      open: true, // for open browser
      compress: true,
      port: 3000,
    },
  };
};
