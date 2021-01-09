//웹팩 = 여러개의 자바스크립트 파일을 하나에 합쳐서 하나의 자바스크립트 파일로.......
//노드 = 자바스크립트 실행기

// 노드에서 경로 조작하도록 주는거....걍외우셈
const path = require('path');

module.exports = {
    name : 'word-relay-setting',
    mode : 'development', // 실서비스에서는 production
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.jsx']
    }, // 확장자 찾아줌ㅋㅎ

    // 1. 엔트리 파일을 읽어서
    entry : {
        app : ['./client'],
        // WordReplay는 client에서 불러오고있으니까 적어줄필요 ㄴㄴ
    }, // 입력

    /// 2. 모듈을 적용한 후
    module : {
        rules : [{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets : ['@babel/preset-env', '@babel/preset-react'],
                plugins : ['@babel/plugin-proposal-class-properties']
            }
        }],
    },
    
    // 3. 아웃풋에 뺀다
    output :{
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }, // 출력
};
