const defaultState = {
    readDate: [],
    obj:{}
}

export default (state=defaultState,action) => {
    switch(action.type){
        case "READ_DATE_FULFILLED":
            let readState = JSON.parse(JSON.stringify(state));
            readState.readDate = action.payload;
            return readState;
        case "ONE_DETAIL":
            let oneDetail =JSON.parse(JSON.stringify(state));
                    
            

            return oneDetail ; 
    }
    return state;
}