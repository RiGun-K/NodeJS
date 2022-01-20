const db = require('./db');

// routes 에서는 여기 함수를 불러서 쓴다 (Repository 역할)

exports.selectTodos = async()=>{
    const sql = 'select * from todo';
    return await db.executeQuery(sql);
};

exports.insertTodo = async(job)=>{
    const sql = `insert into todo(job) values(?)`;
    return await db.executeQuery(sql, [job]);
};

exports.deleteTodo = async(todoId)=>{
    const sql = `delete from todo where todoId=?`;
    return await db.executeQuery(sql, [todoId]);
}
