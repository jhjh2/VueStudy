
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); // 'path'는 node가 만들어준 스크립트

module.exports = {
    mode: 'development', // development: 개발, production: 배포
    devtool: 'eval', // 개발할 때 eval, 배포할 때 hidden-source-map
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/, // 정규표현식 사용, .vue로 끝나는 파일
            loader: 'vue-loader' // vue-loader를 사용한다고 설정
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader',]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js', // '[name].js'도 가능
        path: path.join(__dirname, 'dist'), // __dirname: 현재 경로
    }
};