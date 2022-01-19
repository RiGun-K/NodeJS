/* sql문만 리턴해주는 역할
 * 파라미터를 받아야 됨으로 함수형태로 선언
 */

// Create Table
exports.createTodoTable = ()=>{
    return `create table if not exists todo(
        todoId integer primary key autoincrement,
        job text
    )`;
};

// String type은 ' ' 로 감싼다.
exports.insertTodo = (job)=>{
    return `insert into todo(job) values( '${job}' )`
};

exports.selectTodos = ()=>{
    return `select * from todo`;
};

exports.deleteTodo = (todoId)=>{
    return `delete from todo where todoId=${todoId}`
};