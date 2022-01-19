var express = require('express');
var router = express.Router();

/* GET home page. */

// 전역변수로 만드는것이 편함
const classes = [
  {classId:'1', classTitle:'Vue', teacher:'김리건', max:10, num:0},
  {classId:'2', classTitle:'Java', teacher:'강병석', max:8, num:3},
  {classId:'3', classTitle:'Node', teacher:'노윤호', max:4, num:2}
]

router.get('/', function(req, res) {
  res.render('classes', {classes:classes});
});
  
// 개별 수업
router.get('/:classId', function(req, res) {
  const classInfo = classes.find((item)=>{
    if(item.classId == req.params.classId) return true;
    return false;
  });
  if(classInfo == undefined) {
    res.render('classes_detail');
  } else {
    res.render('classes_detail', {classInfo:classInfo});
  }
});

module.exports = router;