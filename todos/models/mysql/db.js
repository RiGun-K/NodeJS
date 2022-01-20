const mysql = require('mysql2/promise')
const config={
    host: 'localhost',
    user: 'application',
    password: 'application',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 4,
    queueLimit: 0
}

let pool = mysql.createpool(config)
exports.getConnection=()=>{
    return pool;
};

exports.executeStatement = async (sql, params)=>{
    let rows, fields
    try{
        if(params)
            [rows, fields] = await pool.execute(sql, params);
        else
            [rows, fields] = await pool.execute(sql);
        return rows;
    } catch(err) {
        console.log(err);
        return null;
    }
};
