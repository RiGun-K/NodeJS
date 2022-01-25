const express = require('express');
const router = express.Router();

// 로그인 페이지
router.get('/signin', (req,res)=>{
    res.render('signin');
});




module.exports=router;
