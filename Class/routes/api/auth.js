const express = require('express');
const router = express.Router();

const studentDB = require('../../models/students'); // DB 불러오기

// 로그인 요청 메소드 (post 방식 - 숨겨야됨)
// async - db에서 사용자 찾아야되니까 (그 작업 자체가 async await)
router.post('/signin', async(req,res)=>{
    // req로 아이디 비번 끄집어내야함
    const {studentId, password} = req.body; // 구조분해할당
    // 제대로 넘어왔는지 검사(input에 값을 입력했는지)
    if(!studentId || !password){
        // 정상처리 200  잘못된 주소 404 찾을수없음 400
        res.status(400).send("Invalid parameters"); // 400 에러코드 발생 ( ajax 기준 .fail로 처리 )
    }
    
    // db로 학생아이디 조회하기
    const student = await studentDB.getStudentById(studentId);
    if(student==null) {
        res.json({result:'로그인 실패'});
    } else {
        // 아이디가 조회됬다면, 비밀번호 조회하자
        if(student.password==password){
            // 아이디,비밀번호 일치
            res.json({result:'성공'});
        } else {
            // 사용자는 있는데 비밀번호 틀린경우
            res.json({result:'비밀번호 오류'});
        }
    }
});
module.exports=router;