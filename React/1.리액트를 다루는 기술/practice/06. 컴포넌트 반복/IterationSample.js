import React ,{useState} from 'react';


const IterationSample =()=> {

    // 배열........ names
    const [names, setNames] = useState([
        {id : 1, text : 'ㅋㅋ'},
        {id : 2, text : 'ㅋㅋ2'}

    ])

    // value 초기값 선언
    const [inputValue, setInputValue] = useState('');
    
    // 새로운 id 추가햇을때 사용할 id
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    
    //추가했을때
    const onClick = () =>{
        // 다음꺼

        // 새로운 배열을 만들어준다
        const nextNames = names.concat({
            id : nextId, // nextId값을 id로 설정
            text : inputText
        });

        setNextId(nextId+1); // nextId값에 1을 더해줌
        setNames(nextNames); //names 값 업데이트 (새로운 배열로 뒤집어씀)
        setInputText(''); // 비우깅
    }

    // 제거
    const onRemove =(id)=>{
                          // 전달값 = names
        const nextNames = names.filter(name => name.id !==id);
        setNames(nextNames);
    }
    const namesList = names.map(name=> (
        <li key={name.id} onDoubleClick={()=> onReomove(name.id)}>
            {name.text}
        </li>
    ))

    return (
        <>
            <input value={inputValue} onChange={onChange}/>
            <buttton onClick={onClick}>추가</buttton>
            <ul>{namesList}</ul>
        </>
        );
}
