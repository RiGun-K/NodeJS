const db = require('./db');

exports.getStudents = async()=>{
    const sql = 'select * from student';
    return await db.query(sql);
};

exports.getStudentById = async(studentId)=>{
    const sql = 'select * from student where studentId=?';
    return await db.query(sql, [studentId]);
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