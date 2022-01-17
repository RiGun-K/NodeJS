var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const obj = {message:'Hello'};
  res.json(obj);   // json = 스트링이 아니라 객체로 ( RestController 방식이므로 html 필요없음 )
});

module.exports = router;
