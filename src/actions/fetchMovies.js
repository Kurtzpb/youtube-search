export const fetchMovies = (query) => dispatch => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=GET&key=AIzaSyAgQJiqyev61Q10yhZ4Dho4Gl11hHSWaUE`)
    .then(data => data.json())
    .then(obj => {
        if (obj.items.length) {
            const movies = [];
            for (let i = 0; movies.length < 10; i++) {
                if (obj.items[i].id.videoId) {
                    movies.push(obj.items[i])
                }
            }
            dispatch({type: 'FETCH_MOVIES', payload: movies});
        } else {
            dispatch({type: 'FETCH_MOVIES', payload: []});
            alert(`No results for ${query}! Try again.`)
        }
    })
}
