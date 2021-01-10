import React, {Component}   from 'react';
import Try from './try';


function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}
class NumberBaseball extends Component{
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : []
    }

    fruites =[
        {fruit : '사과', taste : '맛있다'},
        {fruit : '바나나', taste : '맛없다'},
        {fruit : '포도', taste : '시다'},
    ];
    
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
                - 분리된 컴포넌트에 전달하기
                - (반복문 단위로 분리 많이 함)
                {this.fruites.map((v, i)=>{
                        return(
                          <Try value={v} index={i} />  
                        );
                })}
                </ul>


            </>
        );
    }
}


export default NumberBaseball;
