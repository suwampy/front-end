import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

/// 이미지의 좌표
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
} as const;

// 점수
const scores = {
    가위: 1,
    바위: 0,
    보: -1,
} as const;

// 타입 선언
/* type a = type of rspCoords; 
type a = {
    readonly 바위 : "0",
    readonly 가위 : "-142px";
    readonly 보 : "-284px";
}

type a = key of type of rspCoords;
type a = "바위" | "가위" | "보"

type a = type of rspCoords[keyof typeof rspCoords];
type a = "0" | "-142px" | "-284px"
*/
type ImgCoords = typeof rspCoords[keyof typeof rspCoords];


// 컴퓨터가 뭘 골랐는지
const computerChoice = (imgCoords: ImgCoords) => {
    // Object keys의 한계.... . [바위 가위 보] 강제 현변환 해줘야함
    return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
        return rspCoords[k] === imgCoords;
    })!
}

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef<number>();

    // 처음 시작했을 때부터
    useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        console.log('다시 실행');
        interval.current = window.setInterval(changeHand, 100);
        return () => { // componentWillUnmount 역할
            console.log('종료');
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    };

    // 컴퓨터랑 나랑 누가이겼는지 비교
    //                  고 차 함 수
    const onClickBtn = (choice: keyof typeof rspCoords) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다!');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = window.setInterval(changeHand, 100);
        }, 1000);
    }

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default RSP;