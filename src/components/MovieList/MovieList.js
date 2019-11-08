import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }
  render() {
    return (
      <div>
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(MovieList);
