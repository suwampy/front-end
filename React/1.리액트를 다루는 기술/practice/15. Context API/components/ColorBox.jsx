import React, {useContext} from 'react';
import {ColorContext} from '../contexts/color';

// src/components
// 2. ColorContext 안에 있는 색상을ㅇ 보여주자
// 색상을 props로 받아 오는 것이 아니라 ColorContexzt 안에 들어있는
// Consumer 컴포넌트를 통해 색상 조회

const ColorBox =()=>{
    // useContext 로 COntext 사용
    const {state} = useContext(ColorContext);

    return(
        <>
                <div
                    style={{
                        width:'64px',
                        height:'64px',
                        background: state.color
                    }}
                />
                <div
                    style={{
                        width:'64px',
                        height:'64px',
                        background: state.subcolor
                    }}
                />
        </>
    );
};

export default ColorBox;