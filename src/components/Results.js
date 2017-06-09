import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviePreview from './MoviePreview';
import { Link } from 'react-router-dom';

class Results extends Component {    

    render() {
        return(
            <div>
                {
                    this.props.store.getMovies.map((video) => {                        
                        return <MoviePreview key={video.id.videoId} movieId={video.id.videoId}>
                                   <Link to={`/movie/${video.id.videoId}`}>
                                       <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                                       <p>{video.snippet.title}</p>
                                   </Link>
                               </MoviePreview>
                    })
                }
            </div>
        )
    };
};

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Results);
