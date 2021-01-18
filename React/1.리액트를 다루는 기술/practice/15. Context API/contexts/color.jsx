import React, {createContext, useState} from 'react';

// src/contexts

// 1. createContext : 새 Context를 만든다.
// 파라미터에는 해당 Context의 기본 상태를 입력
// 4. 동적 Context 사용하기 위해 actions 입력
const ColorContext =createContext({
    state:{color:'black',subcolor:'red'},
    actions: {
        setColor:() =>{},
        setSubcolor:()=>{}
    }
});

// 5. ColorContext.Provider를 렌더링
// Provider의 value에는 상태는 state로 업데이트는 actions으로 묶어서 전달하고 있음
const ColorProvider =({children}) => {
    const [color,setColor] = useState('black');
    const [subcolor, setSubcolor]= useState('red')

    const value= {
        state : {color, subcolor},
        actions : {setColor, setSubcolor}
    };

    return(
        <ColorContext.Provider value ={value}>{children}</ColorContext.Provider>
    )
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const {Consumer : ColorConsumer} = ColorContext;

// ColorProvider와 COlorConsumer 내보내기
export {ColorProvider, ColorConsumer};

export default ColorContext;