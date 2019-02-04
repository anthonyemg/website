module.exports = {
  entry: `${__dirname}/src/public/app.js`,
  output: {
    path: `${__dirname}/src/public/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      }
    ],
  },
};
