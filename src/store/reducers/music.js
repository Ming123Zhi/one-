const defaultState = {
    musicDate: [],
    musicDetails: []
}


export default (state=defaultState,action) => {
    switch(action.type){
        case "MUSIC_DATE_FULFILLED":
            let musicState = JSON.parse(JSON.stringify(state));
            musicState.musicDate = action.payload;
    
            return musicState;
        case "MUSICDETAILS_DATE_FULFILLED":
        console.log(action.payload)
            let MusicDetailsState = JSON.parse(JSON.stringify(state));
            MusicDetailsState.musicDetails[0] = action.payload[action.payload.id];
 
            return MusicDetailsState;
    }   
    return state;
}