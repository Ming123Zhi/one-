import {fetch} from "whatwg-fetch";

export const read_action = ()=>({
    type:"READ_DATE",
    payload:new Promise(resolve=>{
        let url = "/api/article";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
           resolve(data)
           console.log(data) 
        })
    })
})

export const movie_action = ()=>({
    type:"FILM_ACTION",
    payload:new Promise(resolve=>{
     let url = "/api/movie"
     fetch(url)
     .then(res=>res.json())
     .then((data)=>{
        resolve(data);
     })
 })
 })

export const one_action = ()=>({
    type:"ONE_DATE",
    payload:new Promise(resolve=>{
        let url = "/api/one";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
           resolve(data)
           console.log(data) 
        })
    })
})

export const one_detail = (index)=>({
    type:"ONE_DETAIL",
    value:index
})