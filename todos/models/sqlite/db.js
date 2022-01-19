const sqlite3 = require('sqlite3').verbose() // 라이브러리 선언

function getConnection() {
    const db = new sqlite3.Database('./models/sqlite/todo.db', (err)=>{
        if(err){ console.log('err.message')}
    });
    return db;
};

// create, insert, put, delete ( 동기식이므로 함수 호출처럼 삽입, 삭제를 끝내야 리턴됨 )
exports.executeUpdate = (sql)=>{
    const db = getConnection();
    db.serialize();
    db.each(sql);
    db.close();
};

// select ( 비동기이므로 콜백함수 까지 )
exports.executeQuery = (sql, callback)=>{
    const db = getConnection();
    db.serialize();
    db.all(sql, (err, rows)=>{
        callback(err, rows);
        db.close();
    });
};