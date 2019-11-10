import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// Create the rootSaga generator function

function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
    yield takeEvery('FETCH_DETAILS', fetchMovieDetailsSaga);
}

function* fetchMoviesSaga() {
    try {
        const moviesResponse = yield axios.get('/movies');
        console.log(moviesResponse.data);
        yield put({type: 'GET_MOVIES', payload: moviesResponse.data});
    } catch {
        console.log('error fetching movies');
    }
}

function* fetchMovieDetailsSaga(action) {
    try {
        const detailsResponse = yield axios.get(`/details/${action.payload}`);
        console.log(detailsResponse.data);
        yield put ({type: 'GET_DETAILS', payload: detailsResponse.data});
    } catch {
        console.log('error fetching movie details');
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie details
const details = (state = [], action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return {
                id: action.payload[0].id,
                title: action.payload[0].title,
                poster: action.payload[0].poster,
                description: action.payload[0].description,
                genres: action.payload.map(movie => movie.name)
            }
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
