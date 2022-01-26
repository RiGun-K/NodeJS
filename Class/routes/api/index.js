const express = require('express');
const router = express.Router({mergeParams:true}); //
// 각각의 api 선언
const teachers = require('./teachers');
const lectures = require('./lectures');
const auth = require('./auth'); 
const token = require('./token');

// 라우터 선언 ( 주소 할당 )
router.use('/teachers', teachers);
router.use('/lectures', lectures);
router.use('/auth', auth);
router.use('/token', token);

module.exports = router;