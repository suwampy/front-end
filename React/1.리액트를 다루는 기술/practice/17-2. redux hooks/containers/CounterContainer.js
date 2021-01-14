import React, {useCallback} from 'react';
import Counter from '../components/Counter';
import {useSelector, useDispatch} from 'react-redux';
import {increase,decrease} from '../modules/counter';

const CounterContainer =()=> {
    // useSelector Hook을 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다
    // const 결과 = useSelector(상태 선택 함수);
    const number = useSelector(state=>state.counter.number);
    
    // useDeispatch : 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해줌.
    // 컨테이너 컴포넌트에서 액션을 디스패치해야 한다면 이 Hook을 사용하면 됨
    // const dispatch = useDispatch();
    // dispatch({type:'SAMPLE_ACTION'});
    
    const dispatch = useDispatch();

    // useDispatch를 사용할 때는 useCallback과 함꼐 사용하는 습관을 들이자
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=> dispatch(decrease(), [dispatch]));
    
    return (<Counter 
            number = {number} 
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
                />
    );
}

export default  CounterContainer ;
