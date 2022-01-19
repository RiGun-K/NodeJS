const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    database:'node',
    user: 'RiGun',
    password: '4238',
    connectionLimit: 4
});
