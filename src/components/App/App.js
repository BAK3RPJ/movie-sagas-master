import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

// import Routes
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
      </div>
      <Route exact path="/" component={MovieList}></Route>
      </Router>
    );
  }
}

export default App;
