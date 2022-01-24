const mariadb = require('mariadb')
const config = require('../configs/db.config')

const pool = mariadb.createpool(config)

// async await 
exports.query = async(sql, params)=>{
    let conn, rows;
    try{
        conn = await pool.getConnection();
        rows = await conn.query(sql, params);
    } catch(error) {
        return null;
    } finally{
        if(conn) conn.end();
    }
    return rows;
}

