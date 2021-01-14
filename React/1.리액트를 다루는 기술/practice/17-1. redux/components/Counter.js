import React from 'react';

// 카운터컴포넌트 : 숫자를 더하고 뺼 수 있다
const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;