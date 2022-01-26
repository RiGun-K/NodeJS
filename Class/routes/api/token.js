const express = require('express');
const router = express.Router();

const jwt = requrie('jsonwebtoken');
const teacherDB = requrie('../../models/teachers');

router.post('/signin', async (req, res)=>{
    const {teacherId, password} = req.body;
    if(!teacherId || !password) {
        return res.status(400).end();
    }
    const teacher = await teacherDB.getTeacherById(teacherId);
    console.log(teacher)
    if(teacher) {
        const secret = req.app.get('jwt-secret');
        const navload={
            
        }
    }
});

module.exports = router;