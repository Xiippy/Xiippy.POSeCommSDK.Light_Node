const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].xiippyposecomsdklight.js',
    library: 'xiippyposecomsdklight',
    libraryTarget: 'umd',    // very important line
    umdNamedDefine: true     // very important line
  },
  plugins: [
    // new MinifyPlugin()
    new webpack.BannerPlugin(`
    *******************************************
    Lib xiippyposecomsdklight @ https://Xiippy.ai
    Developed by and copyrighted to  Xiippy.ai.
    Copyright 2018-${new Date().getFullYear()} Xiippy.ai. Australian Patents Awarded. International patent pending (end-to-end encrypted receipt and invoice delivery protocol, digital signatures and zero-knowledge anonymously-individualized marketing scheme).
    ********************************************`)
   ],
};