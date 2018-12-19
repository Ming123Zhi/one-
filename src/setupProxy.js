const proxy = require("http-proxy-middleware");
module.exports = (app)=>{
    app.use("/one",proxy({
        target:"http://m.wufazhuce.com",
        changeOrigin:true
    }))
}
//http://m.wufazhuce.com/one/ajaxlist/2275?_token=5284c419ae712848afca73c434102509dd360ebe
//https://search.sohu.com/suggest/hot