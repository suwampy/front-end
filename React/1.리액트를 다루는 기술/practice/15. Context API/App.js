import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';
import {ColorProvider} from './contexts/color';

//3. Provider를 사용하면 Context의 value를 변경할 수 있다
const App =()=>{
    return(
        <ColorProvider>
            <div>
                <ColorBox/>
            </div>
        </ColorProvider>
    )
}