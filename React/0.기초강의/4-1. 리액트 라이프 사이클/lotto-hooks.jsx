import React, {useState,useRef,useEffect,useMemo,useCallback} from 'react';
import Ball from './Ball';

function getWinNumbers(){
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i)=>i+1);
    const shuffle = [];
    while (candidate.length >0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    const bonusNumber = shuffle[shuffle.lnegth-1];
    const winNumbers = shuffle.slice(0,6).sort((p,c)=>p-c);
    return [...winNumbers, bonusNumber]
}


const Lotto = () => {
    
    // hooks
    // 조건문 안에 넣으면 안되고 함수나 반복문 안에도 웬만하면 넣으면 안된다.
    // 무조건 최상위에 선언
    
    // useMemo : 복잡한 함수 결괏값을 기억 두번째 인자 기본값 [](빈배열)
    // []가 바뀌기 전 까지 리턴값을 기억!
    const lottoNumbers = useMemo(()=>getWinNumebers(),[]);// []가 바뀌지 않는 한 다시 실행되지 않음
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = seState(null);
    const [redo, setRedo] = useState(false);
    // useRef : 일반 값을 기억
    const timeouts = useRef([]);

    // useEffect : []값이 바뀔때 실행한다
    useEffect(()=>{
        const {winNumbers} = this.state;
        for (let i=0; i<this.state.winNumbers.length -1; i++){
            timeouts.current[i] = setTimeout(()=>{
                setWinBalls((prevBalls)=>[...prevBalls,winNumbers[i]]);
            }, (i+1) * 1000);
        }
        this.timeouts[6] = setTimeout(()=>{
            setBonus(winUmbers[6]);
            setRedo(true);
        },7000)
        return ()=>{
            timeouts.current.forEach((v)=>{
                clearTimeout(v);
            })
        }
    }, [timeouts.current]); // input이 빈 배열이면 componentDidMount와 동일, 
    // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

    //useCallback ? 함수컴포넌트는 전체가 재실행된다..
    // 함수 자체를 기억해둬서
    // useCallBack을 사용하면 함수 컴포넌트가 재실행되도 다시 실행되지않음!
    // 자식컴포넌트에 함수를 넘길 때는 useCallback를 꼭 사용해야함 
    // [winNumbers]가 바뀌기 전 까지 기억
    const onClickRedo = useCallback(() => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    },[winNumbers]);

    return (
    <>
        <div>당첨숫자</div>
        <div id="결과창">
            {winBalls.map((v)=><Ball key={v} number={v}/>)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} onClick={onClickRedo}/>}
        {redo && <button onClick={redo? this.onClickRedo : ()=>{}}>한 번 더!</button>}
    </>
    )
}



export default Lotto;
