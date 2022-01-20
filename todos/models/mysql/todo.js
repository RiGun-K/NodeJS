const db = require('./db');

exports.selectTodos = async() => {
    const sql = 'select * from todo';
    return await db.executeStatement(sql);
};

exports.insertTodo = async(job)=>{
    const sql = `insert into todo(job) values(?)`;
    return await db.executeStatement(sql, [job]);
};

exports.deleteTodo = async(todoId)=>{
    const sql = `delete from todo where todoId=?`;
    return await db.executeStatement(sql, [todoId]);
};

