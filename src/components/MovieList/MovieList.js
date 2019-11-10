import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }
    
    handleImageClick = (id) => {
        this.props.dispatch({type: 'FETCH_DETAILS', payload: id});
        console.log(id);
        this.props.history.push('/details')
    }

  render() {
    return (
        <>
            <div className="header">
                <h1> This is a list of movies that I love!</h1>
                <h3>Feel free to click on movies to see more details about them.</h3>
            </div>
            <div className="movie-container">
            {this.props.movies.map(movie => 
            <MovieCard
            key={movie.id} 
            id={movie.id}
            clickId={movie.id}
            poster={movie.poster}
            description={movie.description}
            title={movie.title}
            cardWidth={345}
            imageHeight={400}
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
