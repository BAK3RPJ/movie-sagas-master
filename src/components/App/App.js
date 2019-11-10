import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

// import Routes
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditMovieDetails from '../EditMovieDetails/EditMovieDetails';

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
