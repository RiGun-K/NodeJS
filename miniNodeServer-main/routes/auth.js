const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');
const db = require('../models/sqlite-db');
const sql = require('../models/user-sql');

router.post('/login', function(req, res, next) {
  const {userid, password} = req.body;  // 사용자 아이디,패스워드 뽑음
  const secret = req.app.get('jwt-secret'); // app.js에서 전역변수 등록한 값을 가져옴

  if(!userid || !password){
    return res.status(400).json({
        error: 'Invalid parameters'
    });
  }

  async function login(rows){
    let user = null
    if(rows!=null) user = rows[0]
    if(user == null) { throw new Error('Login failed')}
    else{
      console.log(user)
      if(user.password==password) return user
      else throw new Error('Login failed')
    }
  }

  async function authorize(user){
    // payload 생성 (JWT)
    const payload={
      sub: user.userid,
      name: user.name,
      aud: "miniServer", // receiver
      iat: Math.floor(Date.now() / 1000), // issued at (언제 발행됬는가)
    }
    const option={
      algorithm : "HS256",
      expiresIn : "30m",    // 토큰 유효기간
      issuer : "miniServer"
    }
    const result= {
      token:jwt.sign(payload, secret, option),  // 토큰발행
      name:user.name,
      userid:user.userid
    };
    console.log(result)
    return result
  }

  async function respond(result){
    res.json(result);
  }

  const onError = (error) => {
    console.log('auth-done with error')
    res.status(403).json({
        error: error.message
    })
  }

  db.executeQuery(
    sql.selectOneUserSql(userid),
      (error, rows)=>{
      login(rows)
      .then(authorize)
      .then(respond)
      .catch(onError)
  });
});

router.post('/autologin', authMiddleware, function(req, res, next) {
  res.json({userid:req.userid, name:req.decodedToken.name});
});
module.exports = router;
