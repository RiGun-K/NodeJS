const mariadb = require('mariadb')

// DB 설정
const pool = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    database:'node',
    user: 'RiGun',
    password: '4238',
    connectionLimit: 4
});

// DB 연결
const getConnection = async()=>{
    return await pool.getConnection();
}

// async await 
exports.executeQuery = async(sql, params)=>{
    let conn, rows=null;
    try{
        conn = await getConnection();
        if(params)
            rows = await conn.query(sql, params);
        else 
            rows = await conn.query(sql);
    }catch(err) {
        console.log(err);
    }finally{
        if(conn) conn.end();
    }
    return rows;
}