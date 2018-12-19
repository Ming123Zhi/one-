import {fetch} from "whatwg-fetch";

export const get_data_action = ()=>({
    type:"GET_DATA_ACTION",
    payload:new Promise(resolve=>{
     let url = "/one/ajaxlist/0?_token=c9201b7d450963d4c9162d62fb095869e256c760"
     fetch(url)
     .then(res=>res.json())
     .then((data)=>{
         console.log(data);
     })
 })
 })