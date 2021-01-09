const React = require('react');
const ReactDom = require('react-dom');

// 웹팩에서불러오고있음.....
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));
