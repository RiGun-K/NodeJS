var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   const obj = {message:'Hello'};
//   res.json(obj);   // json = 스트링이 아니라 객체로 ( RestController 방식이므로 html 필요없음! )
// });


// 주소가 users 면 hello , user/~~ 면 hello ~~ 출력 
// router.get('/', (req, res)=> {
//   const userId = req.query.userId;
//   if(userId){
//     const obj = {message:`Hello ${userId}`};
//     res.json(obj);
//   } else {
//     const obj = {message:`Hello`};
//     res.json(obj);
//   }
// });

router.get('/', (req, res)=>{
  // 단순 배열
  const messages=['Hello', 'Everyone', '!'];
  // 객체의 배열
  const users=[
    {userId:'userA', name:'AAA'},
    {userId:'userB', name:'BBB'},
    {userId:'userc', name:'CCC'},
  ];

  res.render('users', {messages:messages, users:users});
});

// '/:userId/history/:historyId' 도 가능 ( 사용자 아이디/구매이력/구매번호 )
// 주소의 일부분으로 전달되는 값을 변수로 받아서 JSON으로 리턴 
router.get('/:userId', function(req, res) {
  const userId = req.params.userId;
  res.json({message:`Hello ${userId}`});
})

module.exports = router;
