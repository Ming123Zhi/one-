const defaultState = {
    oneDate: [],
    obj:{}
}

export default (state=defaultState,action) => {  
    switch(action.type){
        case "ONE_DATE_FULFILLED":
            let oneState = JSON.parse(JSON.stringify(state));
            oneState.oneDate = action.payload;
            return oneState;
      
    }
    return state;
}