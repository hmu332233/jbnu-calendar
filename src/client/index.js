import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './store/modules';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools);

import './style.css';

import MainApp from './apps/MainApp';

ReactDOM.render(<MainApp />, document.getElementById('app'));
