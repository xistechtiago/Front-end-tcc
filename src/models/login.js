const conectaBanco = require("../database/index");

const getlogin = async (req, res, next) => {
    let user = req.query.user;
    let pass = req.query.pass;
     await bd.query('select * FROM usuario WHERE email = ' + [user] + 'AND senha = ' +[pass]);
     res.redirect('/');
 };

module.exports = { getlogin }