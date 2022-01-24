const express = require('express');
const router = express.Router({mergeParams:true});
const teachers = require('./teachers');
const lectures = require('./lectures');

router.use('/teachers', teachers);
router.use('/lectures', lectures);

module.exports = router;