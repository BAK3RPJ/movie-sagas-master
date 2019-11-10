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
    }
    
  render() {
    return (
        <>
            <div className="header">
                <h1> Details Page</h1>
            </div>
            <div className="movie-container">
                { this.props.details &&
                    <MovieCard 
                    id={this.props.details.id}
                    poster={this.props.details.poster}
                    description={this.props.details.description}
                    title={this.props.details.title}
                    movieDetails={this.props.details}
                    cardWidth={600}
                    imageHeight={600}
                    showEditButton={true}
                    />
                }
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
