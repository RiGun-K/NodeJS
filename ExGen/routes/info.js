var express = require('express')
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('info');
});

// 3000/info/update 에서 POST로 전달됨
// Body에 JSON 으로 {"":""}로 전달하면 Value 값이 ${title}로 넘어감 
router.post('/update', (req, res)=>{
    const {title, name} = req.body;

    /*  - 위는 아래 두 줄을 구조분해 할당을 사용
    const title = req.body.title;
    const name = req.body.name;
    */
    
    res.send(`Title is ${title}`);
});

module.exports=router;