const getMovies = (state = [], action) => {
    if (action.type === 'FETCH_MOVIES') {
        return action.payload;
    }
    return state;
}

export default getMovies;