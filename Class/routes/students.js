const express = require('express');
const router = express.Router();

const studentDB = require('../models/students');

/* GET users listing. */
router.get('/', async (req, res) => {
  const students = await studentDB.getStudents();
  res.render('students', {students:students});
});

router.get('/:studentId', async (req, res) => {
  const students = await studentDB.getStudentById(req.params.studentId);
  let student, enrollments;
  if(students && students.length==1){
    student = students[0];
    console.log(student);
    enrollments = await enrollmentDB.getEnrollmentsByStudent(req.params.studentId);
    console.log(enrollments);
  }
  res.render('student_detail', {student:student, enrollments:enrollments});
});

module.exports = router;
