// 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고 액션도 디스패치해주자
import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increase,decrease} from '../modules/counter';

const CounterContainer =({number, increase, decrease})=>{
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
}

// mapStateToProps와 mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달됨

// mapStateToProps는 state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킴
const mapStateToProps =(state) =>({
    number: state.counter.number,
})

// mapDispatchToProps의 경우 store의 내장 함수 dispatch를 파라미터로 받아온다
const mapDispatchToProps = (dispatch) => ({
// 액션 생성 함수를 불러와서 액션 객체를 만들고 디스패치 해줌
    increase : () => {
        dispatch(increase());
    },
    decrease : () => {
        dispatch(decrease());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);

// 익명 함수로 만들기
/*

export default connect(
    state => ({
        number : state.counter.number,
    }),
    {   
        increase,
        decrease
    },
)(CounterContainer);

*/