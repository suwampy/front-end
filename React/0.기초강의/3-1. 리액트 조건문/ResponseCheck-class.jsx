import React, { Component } from 'react';

class ResponseCheck extends Comoponent {
    state = {
        state: 'wating',
        message: '클릭해서 시작하세요',
        result: []
    }


    timeout;
    startTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (sate === waiting) {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요'
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
        } else if (state === 'ready') { //성급하게클릭
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '너무 성급하시네요 초록색이 된 후에 클릭하세요'
            })

        } else if (state === 'now') { // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요',
                    result: [...prevState, this.endTime - this.startTime]
                };
            });
        }
    };

    onReset=()=>{
        this.setState({
            result:[],
        })
    }

    renderAverage = () => {
        const { result } = this.state;
        return this.state.result.length === 0
            ? null 
            : <>
                <div>평균신간 : {this.ssate.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
                <button onClick={this.onReset}>리셋</button>  
              </>
    }

    render() {
        const { state, message } = this.state;
        return (
            <>
                <div
                    id="screen"
                    className={this.state.state}
                    onClick={this.onClickScreen}
                >
                    {this.state.message}
                </div>
                {/**리액트에서 조건문 사용
                아무것도 없을 때 : null */}
                {this.state.result.lenght === 0 ? null :
                    <div>평균시간 : {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
                }

                {/**혹은 함수로 만든다 */}
                {this.renderAverage()}
            </>
        )
    }
}

export default ResponseCheck;
