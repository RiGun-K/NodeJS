const express = require('express');
const router = express.Router();

const pbkdf2 = require('../../modules/pbkdf2');

const studentDB = require('../../models/students'); // DB 불러오기

// 로그인 요청 메소드 (post 방식 - 숨겨야됨)
// async - db에서 사용자 찾아야되니까 (그 작업 자체가 async await)
router.post('/signin', async(req,res)=>{
    // req로 아이디 비번 끄집어내야함
    const {studentId, password} = req.body; // 구조분해할당
    // 제대로 넘어왔는지 검사(api로 ajax요청을 받아서)
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
        // 그 전에 비밀번호를 암호화처리를 하자!
        const key = await pbkdf2.getKey(password, student.salt);
        if(student.password == key){
            // 아이디,비밀번호 일치하면
            // 세션처리
            req.session.student = {studentId:studentId, name:student.name};
            res.json({result:'ok'});
        } else {
            // 사용자는 있는데 비밀번호 틀린경우
            res.json({result:'비밀번호 오류'});
        }
    }
});
// 로그아웃
router.get('/signout', (req, res)=>{
    req.session.destroy((err)=>{
        if(err) res.json({result:'ng'});
        else res.json({result:'ok'});
    })
});

// 평문(비밀번호) 입력하면 salt 값과 암호문을 반환한다.
// 관리자가 비번을 생성하고자 할 때 사용
router.get('/key', async(req, res)=>{
    if(req.query.password == undefined)
        res.json();
    
    const salt = await pbkdf2.getSalt();
    const key = await pbkdf2.getKey(req.query.password, salt);
    res.json({salt:salt, key:key});
});

module.exports=router;