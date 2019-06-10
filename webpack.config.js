module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(gif|svg|jpg|png|mp4)$/,
        loader: "file-loader",
        query: {
          publicPath: "static/frontend/",
        }
      }
    ]
  }
};