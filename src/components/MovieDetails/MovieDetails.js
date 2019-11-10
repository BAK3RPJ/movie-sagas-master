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
                <Card style={{maxWidth: 345}} className="card">
                <CardActionArea>
                  <CardMedia
                    style={{height: 400}}
                    image= {this.props.details.poster}
                    title={this.props.details.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.props.details.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {this.props.details.description}
                      <br/>
                      <br/>
                      <b>GENRES:</b>
                      <ul>
                      {this.props.details && this.props.details.genres && this.props.details.genres.map(genre => <li>{genre}</li>)}
                      </ul>
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
