const defaultState = {
    musicDate: []
}


export default (state=defaultState,action) => {
    console.log(action.type);
    switch(action.type){
        case "MUSIC_DATE_FULFILLED":
            let musicState = JSON.parse(JSON.stringify(state));
            musicState.musicDate = action.payload;
            console.log(musicState.musicDate)
            return musicState;
    }
    return state;
}