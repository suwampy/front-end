import React, {Component} from 'react';
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

class Lotto extends Component {
    state = {
        winNumbers : getWinNumbers(), // 당첨 숫자들
        winBalls : [],
        bonus : null, //보너스 공
        redo : false
    }

    timeouts =[];

    runTimeouts= ()=>{
        for (let i=0; i<this.state.winNumbers.length -1; i++){
            this.timeouts[i] = setTimeout(()=>{
                this.setState((prevState)=>{
                    return{
                        winBalls : [...prevState.winBalls, winNumbers[i]]
                    }
                })
            }, (i+1) * 1000);
        }
        this.timeouts[6] = setTimeout(()=>{
            this.setState({
                bonus:winNumbers[6],
                redo:true,
            })
        },7000)
    }


    // 렌더링
    componentDidMount(){
        // 실행
        this.runTimeouts();
    }


    componentDidUpdate(prevProps, prevState){
        // redo(한 번 더)를 눌렀을때만 동작하게
        if(this.state.winBalls.length ===0){
            this.runTimeouts();
        }
    }

    componentWillUnmount(){
        // 정리 !!
        this.timeouts.forEach((t)=>{
            clearTimeout(v);
        })
    }

    onClickRedo =() => {
        this.setState = ({
            winNumbers : getWinNumbers(), // 당첨 숫자들
            winBalls : [],
            bonus : null, //보너스 공
            redo : false
        });
        this.timeouts=[];

    }

    render() {
        const { winBalls, bonus, redo} = this.state;
        return (
            <>
                <div>당첨숫자</div>
                <div id="결과창">
                    {winBalls.map((v)=><Ball key={v} number={v}/>)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number={bonus}/>}
                {redo && <button onClick={redo? this.onClickRedo : ()=>{}}>한 번 더!</button>}
            </>
        )
    }
}

export default Lotto;
