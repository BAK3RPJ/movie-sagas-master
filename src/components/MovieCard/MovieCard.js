import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
// material ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditMovieDetails extends Component {

    handleImageClick = (id) => {
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: id });
        console.log(id);
        this.props.history.push('/details')
    }

    render() {
        return (
            <Card style={{ maxWidth: this.props.cardWidth }} className="card">
                <CardActionArea>
                    <CardMedia
                        style={{ height: this.props.imageHeight }}
                        image={this.props.poster}
                        title={this.props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                            {
                                this.props.movieDetails && this.props.movieDetails.genres &&
                            <>
                            <br />
                            <br />
                            <b>GENRES:</b>
                            <ul>
                                {this.props.movieDetails.genres.map(genre => <li>{genre}</li>)}
                            </ul>
                            </>
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                  </Button>
                  {this.props.clickId && 
                 <Button size="small" color="primary" onClick={() => this.handleImageClick(this.props.clickId)}>
                 Learn More
                </Button>
                }
                </CardActions>
            </Card>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapReduxStateToProps)(EditMovieDetails));
