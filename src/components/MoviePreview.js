import React, { Component } from 'react';
import { connect } from 'react-redux';


class MoviePreview extends Component {

    handleClick () {
        this.props.onShowMovie(this.props.movieId)        
    }    

    render() {
        return(
            <div className='search-item' id={this.props.movieId} onClick={this.handleClick.bind(this)}>{this.props.children}</div>
        )
    }
}

export default connect(
	state => ({
		store: state
	}),
    dispatch => ({
        onShowMovie: (movieId) => {
            dispatch({ type: 'SHOW_MOVIE', payload: movieId })
        }
    })
)(MoviePreview);
