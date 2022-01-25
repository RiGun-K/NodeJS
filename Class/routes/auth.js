const express = require('express');
const router = express.Router();

// 로그인 페이지
router.get('/signin', (req,res)=>{
    res.render('signin');
});
// 실제 로그인은 api로 넣는게 편함 



module.exports=router;
