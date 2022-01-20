const express = require('express');
// const db = require('../models/sqlite/db');
// const sql = require('../models/sqlite/todo-sql');
// const tododb = require('../models/mysql/todo);
// const Todo = require('../models/sequelize/todoModel');

// 쿼리문 담긴 DB 정보를 가져옴
const tododb = require('../models/mariadb/todo');

const router = express.Router();


/* GET home page. */
// router의 callback에 async 키워드가 붙는다 ( await 와 한 쌍 )
// (req 는 todo.js에서 쿼리문 함수 날리는걸 받아오는 것)
router.get('/', async (req, res)=> {
  // 첫 화면은 DB에 저장된 리스트를 불러와야하기에 selectTodos() 호출
  const rows = await tododb.selectTodos();
  // 'index' 페이지로 리스트 띄워준다
  res.render('index', {todos:rows});
});

module.exports = router;
