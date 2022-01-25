const express = require('express');
const router = express.Router();

// 로그인 요청 메소드 (post 방식 - 숨겨야됨)
// async - db에서 사용자 찾아야되니까 (그 작업 자체가 async await)
router.post('/signin', async(req,res)=>{
    // req로 아이디 비번 끄집어내야함
    const {studentId, password} = req.body; // 구조분해할당
    
});
module.exports=router;