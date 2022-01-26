const express = require('express');
const router = express.Router();

const token = require('../../middlewares/token');
const teacherDB = require('../../models/teachers');

/* GET users listing. */
router.get('/', token, async (req, res) => {  // token 사용
  const result = await teacherDB.getTeachers();
  res.json(result);
});

router.get('/:teacherId', async (req, res) => {
  const result = await teacherDB.getTeacherById(req.params.teacherId);
  res.json(result);
});

router.post('/', async(req, res)=>{
  const result = await teacherDB.addTeacher(req.body);
  res.json(result);
});

module.exports = router;
