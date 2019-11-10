import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
// material ui imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class EditMovieDetails extends Component {
        state = {
            id: '',
            title: '',
            poster: '',
            description: '',
            genres: []
        }

    componentDidMount() {
        this.setState({
            id: this.props.details.id,
            title: this.props.details.title,
            poster: this.props.details.poster,
            description: this.props.details.description,
            genres: this.props.details.genres
        })
        console.log('in edit mode');
    }
    
    handleInputChange = (event, propertyName) => {
      this.setState({
        [propertyName]: event.target.value
      })
    }

    handleSave = () => {
      this.props.dispatch({type: 'PUT_EDITS', payload: this.state});
      this.props.history.push('/details');
    }
    
  render() {
    return (
        <>
            <div className="header">
                <h1> Details Page</h1>
            </div>
            <div className="form-container">
              <TextField
            label="Movie Title"
            defaultValue={this.props.details.title}
            margin="normal"
            variant="filled"
            onChange={(event) => this.handleInputChange(event, 'title')}
            />
            <TextField
            label="Movie Description"
            defaultValue={this.props.details.description}
            multiline
            margin="normal"
            variant="filled"
            onChange={(event) => this.handleInputChange(event, 'description')}
            />
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => this.handleSave()}>Save</Button>
            <Button 
            variant="outlined" 
            color="secondary"
            onClick={() => this.props.history.push('/details')}
            >Cancel</Button>
            </div>
            <div className="movie-container">
                { this.props.details &&
                <MovieCard
                key={this.state.id} 
                id={this.state.id}
                poster={this.props.details.poster}
                description={this.props.details.description}
                title={this.state.title}
                movieDetails={this.props.details}
                cardWidth={600}
                imageHeight={600}
                showEditButton={false}
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

export default connect(mapReduxStateToProps)(EditMovieDetails);
