var express = require('express');
var router = express.Router();

// 전역변수로 만드는것이 편함
const classes = [
    {classId:'1', classTitle:'C', teacher:'ABC', max:10, },
    {classId:'2', classTitle:'JAVA', teacher:'ABCD'},
    {classId:'3', classTitle:'NODE', teacher:'ABCDE'}
  ];

  router.get('/', function(req, res, next) {
    res.json(classes);
  });


router.post('/', (req,res)=>{
    const {classId, studentId} = req.body;
    const classInfo = classes.find((item)=>{
        return item.classId==classId;
    });
    if(classInfo==undefined) {
        res.json({result:'ng', code:100});
    }
    if(classInfo.num == classInfo.max){
        res.json({result:'ng', code:200});
    } else {
        classInfo.num++;
        res.json({result:'ok'}); // ok 되면 , 뒤에 어떤걸 선택되었는지 설명해주는것도 필요함 
    }
});

// api는 렌더링이 필요없어서 pug가 필요 없음.  json 형식으로 전달 
  
  module.exports = router;