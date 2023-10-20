const mysql = require('mysql');

//configura o pool de conexões
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tcc',
    connectionLimit: 10
});

//teste da conexão com o banco de dados
console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada'));

//exporta o pool
module.exports = pool;