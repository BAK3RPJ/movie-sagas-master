import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'}) // runs fetchMoviesSaga to retrieve all movie data from DB
    }

  render() {
    return (
        <>
            <div className="header">
                <h1> This is a list of movies that I love!</h1>
                <h3>Feel free to click on movies to see more details about them.</h3>
            </div>
            <div className="movie-container">
            {this.props.movies.map(movie => // accesses movie reducer to map movies onto DOM
            <MovieCard
            key={movie.id} 
            id={movie.id}
            clickId={movie.id}
            poster={movie.poster}
            description={movie.description}
            title={movie.title}
            cardWidth={200}
            imageHeight={300}
            textHeight={200}
            showEditButton={false}
            />
            )}
        </div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(MovieList);
