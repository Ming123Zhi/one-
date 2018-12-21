const defaultState = {
    oneDate: [],
    itemDetail:{}
}

export default (state=defaultState,action) => {  
    switch(action.type){
        case "ONE_DATE_FULFILLED":
            let oneState = JSON.parse(JSON.stringify(state));
            oneState.oneDate = action.payload;
           
            return oneState;
        case "ONE_DETAIL_FULFILLED":
            console.log(action)
            let oneDetail =JSON.parse(JSON.stringify(state));
            for(var i=0;i<action.payload.length;i++){
                if(action.payload.id == action.value){
                    console.log(action.value)
                    oneDetail.itemDetail = action.payload[i]
                    break;
                } 
            }
           
            return oneDetail ; 
    }
    return state;
}