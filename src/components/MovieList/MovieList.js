import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
// material ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });

//   const classes = useStyles();

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

  render() {
    return (
        <>
            <div className="list-header">
                <h1> This is a list of movies that I love!</h1>
                <h3>Feel free to click on movies to see more details about them.</h3>
            </div>
            <div className="movie-container">
            {this.props.movies.map(movie => (
                <Card style={{maxWidth: 345}} className="card">
                <CardActionArea>
                  <CardMedia
                    style={{height: 400}}
                    image= {movie.poster}
                    title={movie.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {movie.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
            
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(MovieList);
