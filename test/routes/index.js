var express = require('express');
const Todo = require('../../todos/models/students.js');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=>{
  res.render('index', {"title":d});
});

module.exports = router;
