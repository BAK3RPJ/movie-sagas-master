import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

// import Routes
import MovieList from '../MovieList/MovieList'; // lists all movies on the Dom, using MovieCard component
import MovieDetails from '../MovieDetails/MovieDetails'; // Shows further details of a chosen movie
import EditMovieDetails from '../EditMovieDetails/EditMovieDetails'; // allows user to edit the details of movie from details page

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
      </div>
      <Route exact path="/" component={MovieList}></Route>
      <Route path="/details" component={MovieDetails}></Route>
      <Route path="/edit" component={EditMovieDetails}></Route>
      </Router>
    );
  }
}

export default App;
