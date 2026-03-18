const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // каталог сборки
    filename: 'index.js',                   // имя выходного файла
    library: 'ajs',                         // название библиотеки
    libraryTarget: 'umd',                   // универсальный формат
    libraryExport: 'default',               // экспорт по умолчанию
    globalObject: 'this',                   // глобальный объект
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};