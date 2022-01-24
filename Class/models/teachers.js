const db = require('./db');

exports.getTeachers = async()=>{
    const sql = 'select * from teacher';
    return await db.query(sql);
};

exports.getTeacherById = async(teacherId)=>{
    const sql = 'select * from teacher where teacherId=?';
    return await db.query(sql, [teacherId]);
};

exports.addTeacher = async(teacher)=>{
    const sql = 'insert into teacher(teacherId, name, password) values(?,?,?)';
    return await db.query(sql, [teacher.teacherId, teacher.name, teacher.password]);
};

exports.removeTeacher = async(teacherId)=>{
    const sql = 'delete from teacher where teacherId=?';
    return await db.query(sql, [teacherId]);
};