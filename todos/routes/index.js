const express = require('express');
// const db = require('../models/sqlite/db');
// const sql = require('../models/sqlite/todo-sql');
const tododb = require('../models/mariadb/todo');

const router = express.Router();

/* GET home page. */
// router의 callback에 async 키워드가 붙는다 ( await 와 한 쌍 )
router.get('/', async (req, res)=> {
  const rows = await tododb.selectTodos();
  res.render('index', {todos:rows});
});

module.exports = router;
