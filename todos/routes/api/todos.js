const express = require('express');
const router = express.Router();

// 할 일 리스트 조회
router.get('/', (req, res)=>{
    const todos=[
        {todoId:1, job:'JS Study'},
        {todoId:2, job:'Workout'}
    ];
    res.json(todos);
});

// 할 일 추가
router.post('/', (req, res)=>{
    const {job} = req.body;
    res.json({result:'ok'});
});

// 할 일 삭제
router.delete('/:todoId', (req, res)=>{
    const todoId = req.params.todoId;
    res.json({result:'ok'});
});

module.exports=router;