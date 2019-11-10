import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
    yield takeEvery('FETCH_DETAILS', fetchMovieDetailsSaga);
    yield takeEvery('PUT_EDITS', putMovieDetailsSaga);
}

function* fetchMoviesSaga() {
    try {
        const moviesResponse = yield axios.get('/movies');
        console.log(moviesResponse.data);
        //stores movies from database in movies reducer
        yield put({type: 'GET_MOVIES', payload: moviesResponse.data}); 
    } catch {
        console.log('error fetching movies');
    }
}

function* fetchMovieDetailsSaga(action) {
    try {
        const detailsResponse = yield axios.get(`/details/${action.payload}`);
        console.log(detailsResponse.data);
        // stores details of chosen movie from db in details reducer
        yield put ({type: 'GET_DETAILS', payload: detailsResponse.data}); 
    } catch {
        console.log('error fetching movie details');
    }
}

function* putMovieDetailsSaga(action) {
    try {
        // updates "title" and "description" in "movies" table in database with inputs in EditMovieDetails component
        yield axios.put(`/details`, action.payload);
        // fetches details of chosen movie, so details reducer now contains correct data. 
        yield put ({type: 'FETCH_DETAILS', payload: action.payload.id}); 
    } catch {
        console.log('error updating movie details');
    }
}

export default rootSaga;