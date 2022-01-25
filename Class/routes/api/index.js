const express = require('express');
const router = express.Router({mergeParams:true}); //
// 각각의 api 선언
const teachers = require('./teachers');
const lectures = require('./lectures');
const auth = require('./auth'); 

// 라우터 선언
router.use('/teachers', teachers);
router.use('/lectures', lectures);
router.use('/auth', auth);

module.exports = router;