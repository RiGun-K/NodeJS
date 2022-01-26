const express = require('express');
const router = express.Router();

const jwt = requrie('jsonwebtoken');
const teacherDB = requrie('../../models/teachers');

router.post('/sigin', (req, res)=>{
    const {teacherId, password} = req.body;
    if(!teacherID || !password) {
        return res.status(400);
    }
});

module.exports = router;