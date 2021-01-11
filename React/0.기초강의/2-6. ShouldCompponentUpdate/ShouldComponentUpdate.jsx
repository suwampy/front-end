import React, {Component} from 'react';

class Test extends Component {
    state = {
        counter : 0,
    }

    // 어떤 경우에 렌더링을 해야할지 직접 적어줘야함
    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.counter !== nextState.counter){
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({});
    }

    render(){
        // 1. counter가바뀌든말든 상관없이 클릭할때마다렌더링이 일어남..
        console.log('렌더링', this.state);
        return(
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }

}
