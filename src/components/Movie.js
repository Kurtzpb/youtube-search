import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Movie extends Component { 
    render() {
        const movieId = this.props.store.showMovie;
        
        return(
            <div>
                <h3 className='home-page-link'><Link to='/'>Main Page</Link></h3>
                <div className='movie'>
                    {this.props.store.showMovie ?
                     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movieId}`} title='Youtube video' frameBorder="0" allowFullScreen>Your browser does not support iframe</iframe> :
                     null}            
                </div>
            </div>
        )
    }
    
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Movie);
