const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/properties",{
            target:"https://prop24app.herokuapp.com",
            changeOrigin: true
        })
    );
}