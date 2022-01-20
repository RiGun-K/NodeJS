const express = require('express');
const router = express.Router();
// const db = require('../../models/sqlite/db');
// const sql = require('../../models/sqlite/todo-sql');
const tododb = require('../../models/mariadb/todo');

// 할 일 리스트 조회
router.get('/', async (req, res)=>{
    const rows = await tododb.selectTodos();
    res.json(rows);
});

// 할 일 추가
router.post('/', async (req, res)=>{
    const {job} = req.body;
    const result = await tododb.insertTodo(job);
    console.log(result);
    // affectedRows ( DB에 영향을 받은 열 )
    if(result && result.affectedRows==1) res.json({result:'등록 되었습니다.'});
    else res.json({result:'등록 실패하였습니다.'});
});

// 할 일 삭제
router.delete('/:todoId', async (req, res)=>{
    const todoId = req.params.todoId;
    const result = await tododb.deleteTodo(todoId);
    console.log(result);
    if(result && result.affectedRows==1) res.json({result:'삭제 되었습니다.'});
    else res.json({result:'삭제가 실패했습니다.'});
});

module.exports=router;