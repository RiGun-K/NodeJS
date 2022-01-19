const express = require('express');
// const db = require('../models/sqlite/db');
// const sql = require('../models/sqlite/todo-sql');
const tododb = require('../models/mariadb/todo');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=> {
  const rows = await tododb.selectTodos();
  res.render('index', {todos:rows});
});

module.exports = router;
