import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import showMovie from './showMovie';
import getMovies from './getMovies';

const reducer = combineReducers({
    routing: routerReducer,
    showMovie,
    getMovies
})

export default reducer;
