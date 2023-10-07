const mysql = require('mysql');

const con = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: '',
    database: 'tcc'
});

module.exports = con;

