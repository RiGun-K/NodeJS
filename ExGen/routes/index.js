var express = require('express');
const app = require('../../ExGen/app');
var router = express.Router();

/* GET home page. */
// next = 이 요청에 대해서 콜백(처리할 것이 더있다 = DB 조회 , 권한 조회 등 ) 이 더 있을때 사용 
// localhost:3000 실행하면 index.pug 띄워주기
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi Express' });  // render = 뷰 템플릿 반환 , title 을 index.pug에 반환 
}); 

module.exports = router;
