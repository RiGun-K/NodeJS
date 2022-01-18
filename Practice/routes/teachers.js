var express = require('express');
var router = express.Router();

// 학원 소개 문구 출력 , 고정 문구 출력

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('teachers', { title: '강사 리스트' });
});

router.get('/:teacherId', function(req, res) {
    res.render('teachers_detail', );
  })

module.exports = router;