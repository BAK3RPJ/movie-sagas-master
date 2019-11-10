import {combineReducers} from 'redux';

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

const allReducers = combineReducers({movies, details});

export default allReducers;