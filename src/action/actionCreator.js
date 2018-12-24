import {fetch} from "whatwg-fetch";
//阅读
export const read_action = ()=>({
    type:"READ_DATE",
    payload:new Promise(resolve=>{
        let url = "/api/article";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
           resolve(data)
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
        })
    })
})

export const one_detail = (id)=>({
    type:"ONE_DETAIL",

    payload:new Promise(resolve=>{
        let url = "/api/one";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            data.id = id;
           resolve(data)
        })
    })
})
//音乐
export const music_action = () => ({
    type: "MUSIC_DATE",
    payload: new Promise(resolve=>{
        let url = "/api/music";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
        })
    })
})

//音乐详情
export const musicDetails_action = (id) => ({
    
    type: "MUSICDETAILS_DATE",
    payload: new Promise(reslove=>{
        let url = "/api/music";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            data.id = id
            reslove(data)
        })
    })
})