var express = require('express');
var router = express.Router();

// 학원 소개 문구 출력 , 고정 문구 출력

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyMac' });
});

module.exports = router;
