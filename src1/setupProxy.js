const proxy = require("http-proxy-middleware");
module.exports = (app)=>{
    app.use("/",proxy({
        target:"http://localhost:5000",
        changeOrigin:true
    }))
}
//http://m.wufazhuce.com/one/ajaxlist/2275?_token=5284c419ae712848afca73c434102509dd360ebe
//https://search.sohu.com/suggest/hot