import React, { Component, createRef } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  
    // 랜더링 될 때 처음에 생성되는 객체
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [], // push 쓰면 안 돼요
  };
  
  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    // 1. 현재 state 값을 가져온다
    // 현재 state 값 : 랜더링 됐을 때의 초기값 + 폼을 제출하면서 초기화 된 값
    // ex ) answer : [9,6,8,3]
    //      result : ""
    //      tries : [{try : "1234", result : "1스트라이크 2볼입니다"}]
    //      value : "1233" // 폼에 제출 한 값 (제출함으로써 초기화 됨)

    console.log("this state : ");
    console.log(this.state);

    if (value === answer.join('')) { 
    // 2.제출한 폼의 input값과 answer 값이 일치한다면 = 홈런일 때
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        }
      });

      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });

      this.inputRef.current.focus();

    } else { 
    // 3. 답 틀렸으면
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) { // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: '',
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef(); // this.inputRef

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>
      </>
    );
  }
}
export default NumberBaseball; // import NumberBaseball;
