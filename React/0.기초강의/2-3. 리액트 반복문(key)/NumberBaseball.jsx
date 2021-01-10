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
                
                - 2차원배열로
                <ul>
                    {[
                        ['사과','맛있다'],
                        ['바나나','맛없다'],
                        ['포도','시다']
                    ].map((v)=>{
                        return(
                            <li><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })}
                </ul>

                - 객체로
                <ul>
                    {[
                        {fruit : '사과', taste : '맛있다'},
                        {fruit : '바나나', taste : '맛없다'},
                        {fruit : '포도', taste : '시다'},
                    ].map((v, i)=>{
                        return(
                            // key를 적어줘야함
                            // i = index
                            // 고유하게 만드는거....로 만들어서 해야함 ㅡ.ㅡ
                            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste} - {i}</li>
                        );
                    })}
                </ul>


            </>
        );
    }
}


export default NumberBaseball;
