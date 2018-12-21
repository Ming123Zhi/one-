const defaultState = {
    movieDate: []
}


export default (state=defaultState,action) => {
    console.log(action.type);
    switch(action.type){
        case "FILM_ACTION_FULFILLED":
            let movieState = JSON.parse(JSON.stringify(state));
            movieState.movieDate = action.payload;
            return movieState;
    }
    return state;
}