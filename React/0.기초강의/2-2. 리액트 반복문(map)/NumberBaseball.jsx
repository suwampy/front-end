import React, {Component}   from 'react';


function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}
class NumberBaseball extends Component{
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : []
    }

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };
    
    render(){
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSumbitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    <!--react에서는 반복문을 map으로 쓴다-->
                    <!--반복되는걸 배열로 만들자-->
                    {['사과', '바나나', '귤', '딸기', '밤'].map((v)=>{
                        return(
                            <li>{v}</li>
                        );
                    })}
                </ul>
            </>
        );
    }
}


export default NumberBaseball;
