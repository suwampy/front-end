import React, { useState, useRef, useCallback, useMemo } from 'react';
import { triggerAsyncId } from 'async_hooks';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);
  
  
  //this.timeout this.startTime this.endTime
  // class에서는 this의 속성들을.. timeout startTime endTime이렇게 적어줬음
  // hooks에서는 this의 속성들을 ref를 써준다
  // state와 ref의 차이?
  // state => return부분이 다시 실행됨
  // ref => return 부분이 다시 실행되지않음. 값이 바뀌기는 하지만 화면에는 영향을 미치고 싶지 않을 때~~
  // 불필요한 렌더링을막자
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready'); // 렌더링이된다!!
      setMessage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);


  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0
      ? null
      : <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  };
  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>

    {/**return 내부에 if 쓰기 */}
      {()=>{
          if(result.length===0){
              return null;
          }else {
              return <div>어쩌고</div>
          }
      }}

    {/**return 내부에 for 쓰기 */}
    {(()=>{
        const array = [];
        for(let i=0; i<triggerAsyncId.length; i++){
            array.push("어쩌고");
        }

        return [];
    })}

      {renderAverage()}
    </>
  );
};
export default ResponseCheck;
