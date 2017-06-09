const showMovie = (state = '', action) => {
    if (action.type === 'SHOW_MOVIE') {
        return action.payload ? action.payload : state;
    }
    return state;
}

export default showMovie;