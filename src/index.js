import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';

// redux middleware and rootreducer file
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/root.reducers';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// import the rootSaga generator function
import rootSaga from './redux/sagas/root.saga';


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root'));
