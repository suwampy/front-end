import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

// 1. 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크,체크 해제함
const REMOVE = 'todos/REMOVE';  // todo를 제거함


// 2. 액션 생성 함수 만들기
// input=>input 같이 파라미터를 그대로 반환하는 함수를 입력하는 작업 생략 가능. 가독성 ^^ㅋㅋ
export const changeInput = createAction(CHANGE_INPUT, input=>input);

// export const changeInput = (input) => ({
//     type : CHANGE_INPUT,
//     input
// })


let id= 3;
export const insert = createAction(INSERT, text =>({
    id : id++,
    text,
    done : false
}))

// let id =3; // insert가 호출 될 때마다 1씩 더해짐
// export const insert = (text) => ({
//     type : INSERT,
//     todo : {
//         id : id++,
//         text,
//         done : false
//     }
// })


export const toggle = createAction(TOGGLE, id=>id);

// export const toggle = (id) => ({
//     type : TOGGLE,
//     id
// });

export const remove = createAction(REMOVE, id=>id);
// export const remove =(id)=>({
//     type : REMOVE,
//     id
// })

// 3. 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input : '',
    todos : [
        {
            id : 1,
            text : '리덕스 기초 배우기',
            done : true
        },
        {
            id : 2,
            text : '리액트와 리덕스 사용하기',
            done : true
        },
    ]
}

// immeer 적용 코드
const todos = handleActions(
    {
        [CHANGE_INPUT] : (state,{payload:input}) => 
            produce(state, draft =>{
                draft.input = input;
            }),
        [INSERT] : (state,{payload:todo}) =>
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE] : (state,{payload:id})=>
            produce(state, draft =>{
                const todo = draft.todos.find(todo => todo.id ===id);
                todo.done = !todo.done;
            }),
        [REMOVE] : (state,{payload:id}) =>
            produce(state, draft => {
                const index =draft.todos.findIndex(todo => todo.id ===id);
                draft.todos.splice(index, 1);
            })
    },
    initialState,
)


// immer 적용 안함
const todos = handleActions(
    {
        [CHANGE_INPUT] : (state,{payload:input}) => ({...state, input}),
        [INSERT] : (state,{payload:todo}) => ({
            ...state,
            todos : state.todos.concat(todo)
        }),
        [TOGGLE] : (state,{payload:id})=>({
            ...state,
            todos : state.todos.map(todo=>
                todo.id ===id ? {...todo, done: !todo.done} :todo,
                )
        }),
        [REMOVE] : (state,{payload:id}) => ({
            ...state,
            todos : state.todos.filter(todo =>todo.id !==id),
        })
    },
    initialState,
)


// function todos(state = initialState, action){
//     // state값 = 현재 상태
//     // action = 새로 들어온거
//     switch (action.type) {
//         case CHANGE_INPUT:
//         //input 값을 변경할 때
//             return {
//                 // 리듀서에서는 상태의불변성을 유지하면서 데이터에 변화를 일으켜야함
//                 // -> spread 연산자 사용
//                 ...state, //불변성유지 기존의 객체는 건드리지않음!!
//                 input : action.input
//             };
//         case INSERT :
//             return{
//                 ...state,
//                 todos : state.todos.concat(action.todo)
//             };
//         case TOGGLE :
//             return{
//                 ...state,
//                 todos:state.todos.map(todo=>
//                     todo.id === action.id ? { ...todo, done: !todo.done} : todo
//                 )
//             };

//         case REMOVE :
//             return {
//                 ...state,
//                 todos : state.todos.filter(todo=>todo.id!==action.id)
//             };
//         default :
//             return state;
//     }
// }

export default todos;