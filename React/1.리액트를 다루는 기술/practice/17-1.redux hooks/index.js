import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import rootReducer from './modules';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// 1. 스토어 만들기
const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

