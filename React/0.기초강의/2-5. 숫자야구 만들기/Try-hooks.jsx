import React, { Component } from 'react';
//          props를 위한자리
//            구조분해해서 {tryInfo}
const Try =( {tryInfo} )=> {
    return(
        <li>
          <div>{tryInfo.try}</div>
          <div>{tryInfo.result}</div>
        </li>
      );
}

export default Try;
