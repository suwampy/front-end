// 패키지, 라이브러리
const React = require('react');
const {Component} = React;
class WordRelay extends Component{
    state = {
        text : 'Hello, webpack',
    };

    render(){
        return <div><h1>{this.state.text}</h1></div>
    }
}

// 바깥에서쓸수있게해주는거
module.exports = WordRelay;
