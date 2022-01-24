const db = require('./db');

// routes 에서는 여기 함수를 불러서 쓴다 (Repository 역할)

exports.selectTodos = async()=>{
    const sql = 'select * from todo';
    return await db.executeQuery(sql);
};

exports.insertTodo = async(job)=>{
    // values(?) -> [] 배열로 넣어준다 
    const sql = `insert into todo(job) values(?)`;
    return await db.executeQuery(sql, [job]);
};

exports.deleteTodo = async(todoId)=>{
    // ?가 들어가면 파라미터로 [](배열)로 줌
    const sql = `delete from todo where todoId=?`;
    return await db.executeQuery(sql, [todoId]);
};
