import React, { Component } from 'react';

class Try extends Component {
    // props로 받아온다 (부모-자식 관계 형성)
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b>
                - {this.props.value.taste} - {this.props.index}
            </li>
        )
    }
}


export default Try;
