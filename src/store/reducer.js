const defaultState = {
    itemList:[]
}
export default (state = defaultState,action)=>{
     console.log(action)
    switch(action.type){
        // case "GET_DATA_ACTION_FULFILLED":
        //     let goodsState = JSON.parse(JSON.stringify(state));
        //     goodsState.itemList = action.payload.data;
        //     return goodsState;
    }
    return state; 
}
// _FULFILLED
