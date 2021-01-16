import * as React from 'react';
import { useEffect, useReducer, useCallback, Reducer } from 'react';
import Table from './Table';

// 객체는 인터페이스로~
interface ReducerState {
  winner: 'O' | 'X' | '', // 승자 패자 무승부
  turn: 'O' | 'X',
  tableData: string[][], // 검은돌 흰돌
  recentCell: [number, number],
}

// reducer : 흩어져있던 state를 종합적으로 관리
// 객체같은ㅇ거는 타입 타이핑
const initialState: ReducerState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

// 액션들
export const SET_WINNER = 'SET_WINNER'; // 승자 결정
export const CLICK_CELL = 'CLICK_CELL' as const; // 칸 눌렀을 때
export const CHANGE_TURN = 'CHANGE_TURN' as const; // 턴 바꿨을 때
export const RESET_GAME = 'RESET_GAME' as const; // 게임 초기화

// 액션들을 만들어줌
interface SetWinnerAction {
  type: typeof SET_WINNER;
  winner: 'O' | 'X';
}

// 실제 액션 객체만들어줌
const setWinner = (winner: 'O' | 'X'): SetWinnerAction => {
  return { type: SET_WINNER, winner };
};

interface ClickCellAction {
  type: typeof CLICK_CELL;
  row: number;
  cell: number;
}

const clickCell = (row: number, cell: number): ClickCellAction => {
  return { type: CLICK_CELL, row, cell };
};

interface ChangeTurnAction {
  type: typeof CHANGE_TURN;
}

interface ResetGameAction {
  type: typeof RESET_GAME;
}

// 액션들의 묶음
type ReducerActions = SetWinnerAction | ClickCellAction | ChangeTurnAction | ResetGameAction;

// 기존state와 action 을 받아서 state를 리턴
const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };
    }
    default:
      return state;
  }
};

const TicTacToe = () => {
    // reducer의 제네릭 : state, actions
    // useReducer의 제네릭 : reducer
  const [state, dispatch] = useReducer<Reducer<ReducerState, ReducerActions>>(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch(setWinner('O'));
  }, []);

  useEffect(() => {
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }
    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    }
    console.log(win, row, cell, tableData, turn);
    if (win) { // 승리시
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true; // all이 true면 무승부라는 뜻
      tableData.forEach((row) => { // 무승부 검사
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
      {winner && <div>{winner}님의 승리</div>}
    </>
  )
};

export default TicTacToe;