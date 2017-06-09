import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './../actions/fetchMovies.js';

let queryInput;

class Search extends Component {    

    handleSubmit(e) {
        e.preventDefault();
        this.props.onGetMovies(queryInput.value);
    }

    render() {
        return (
            <form className='input-form' onSubmit={this.handleSubmit.bind(this)}>
                <input className='input-field' type='text' placeholder='Search...' ref={(input) => { queryInput = input }}/>
                <input className='input-button' onClick={this.handleSubmit.bind(this)} type='button' value='Submit'/>
            </form>
        );
    }
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
        onGetMovies: (queryValue) => {
            dispatch(fetchMovies(queryValue))
        }
    })
)(Search);
