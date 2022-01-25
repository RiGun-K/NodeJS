const express = require('express');
const router = express.Router();

// 실제 로그인,로그아웃은 api로 넣는게 편함 

// 로그인 페이지
router.get('/signin', (req,res)=>{
    res.render('signin');
});

// 로그아웃 페이지
router.get('/signout', (req, res)=>{
    req.session.destroy((err)=>{    // 세션을 삭제하고 메인페이지로 이동
        res.redirect('/');
    })
});

module.exports=router;
