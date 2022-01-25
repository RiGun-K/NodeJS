const db = require('./db');


// db.query() 하면 결과가 하나든 여러개든 배열로 리턴됨.

exports.getStudents = async()=>{
    const sql = 'select * from student';
    return await db.query(sql);
};

exports.getStudentById = async(studentId)=>{
    const sql = 'select * from student where studentId=?';
    const list =  await db.query(sql, [studentId]);
    // 학생 아이디를 찾았다면 해당 0번째 배열값 리턴
    if(list && list.length==1){
        return list[0]
    } else {
        return null;
    }
};

exports.addStudent = async(student)=>{
    const sql = 'insert into student(studentId, name, password) values(?,?,?)';
    return await db.query(sql, 
        [student.studentId, student.name, student.password]);
};

exports.removeStudent = async(studentId)=>{
    const sql = 'delete from student where studentId=?';
    return await db.query(sql, [studentId]);
};