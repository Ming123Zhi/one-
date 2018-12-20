import {fetch} from "whatwg-fetch";

export const read_action = ()=>({
    type:"READ_DATE",
    payload:new Promise(resolve=>{
        let url = "/article";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
           resolve(data)
           console.log(data) 
        })
    })
})
