const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Weatherywhere',
      filename: 'index.html',
      inject:'body'
    })
  ],
  
  module:{
    
    rules:[
      {
        test: /\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test : /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        use:[
          {
            loader: 'file-loader',
            options:{
              name:'[name].[ext]',
              outputPath: 'images'
            
            }
          }
        ]
      }
      
    ]
  }
  
  
};