const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

const ENV = process.env.NODE_ENV || 'development';

const getEnvValue = (dev, staging, prod) => {
  if (ENV === 'production') return prod;
  if (ENV === 'staging') return staging;
  return dev;
};

module.exports = {
  entry: './src/index.tsx',
  mode: ENV === 'production' ? 'production' : 'development',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        chat: `chat@${getEnvValue(
          process.env.CHAT_DEV_URL,
          process.env.CHAT_STAGING_URL,
          process.env.CHAT_PROD_URL
        )}`,
        email: `email@${getEnvValue(
          process.env.EMAIL_DEV_URL,
          process.env.EMAIL_STAGING_URL,
          process.env.EMAIL_PROD_URL
        )}`,
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
