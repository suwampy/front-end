import React, {Component}   from 'react';

class NumberBaseball extends Component{

}

export const hello = 'hello'; // import {hello}
export const bye = 'hello'; // import {hello, bye}

export default NumberBaseball; // import NumberBaseball; : 한 번만 쓸 수 있음

// node에서는 이렇게 써야함
// const React = require('react');
/// export.hello = 'hello';
// module.exports = NumberBaseball;

/// 근데 쓸 수 있는 이유?
/// 바벨이 바꿔줌ㅋㅎㅋㅎ
