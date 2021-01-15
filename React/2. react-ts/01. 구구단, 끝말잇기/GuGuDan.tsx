import * as React from 'react'; // jsx는 이부분이꼭필요함
import {useState, useRef} from 'react';

// <> === React.Fragment
const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] =  React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    // 타입추론해줘야함
    const inputEl =useRef<HTMLInputElement>(null);

    // e : 표기 해줘야함
    const onSubmitForm =(e: React.ChangeEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const input = inputEl.current;
        if (parseInt(value) === first * second){ // 정답 맞췄으면
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            if(input){ // 에러 방지
                input!.focus()
            }
            
        } else {
            setResult('땡');
            setValue('');
            if(input){
                input!.focus()
            }
        }
    }

    return (
        <>
            <div>{first} 곱하기 {second} 는</div>
            <form onSubmit = {onSubmitForm}>
                <input
                    ref ={inputEl}
                    type ="number"
                    value = {value}
                    onChange = {(e)=> setValue(e.target.value)}
                ></input>

            </form>
            <div>{result}</div>
        </>
    )
}

export default GuGuDan;