import React from 'react';
import TodosContainer from './containers/TodosContainer'
import CounterContainer from './containers/CounterContainer'

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
