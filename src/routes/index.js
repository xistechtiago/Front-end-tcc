const routerPrincipal  = require("./routes");
module.exports = (app)=> {
    app.use(routerPrincipal);
}