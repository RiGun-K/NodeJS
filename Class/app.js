var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 세션 설정
const session = require('express-session');
const sessionConfig = require('./configs/session.config');
//

//
var indexRouter = require('./routes/index');
var teachersRouter = require('./routes/teachers');
var lecturesRouter = require('./routes/lectures');
var studentsRouter = require('./routes/students');
var authRouter = require('./routes/auth');

var apiRouter = require('./routes/api');
//

var app = express();

// 세션 사용
app.use(session(sessionConfig));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 전역변수 (routes/auth.js에서 사용)
app.set('jwt-secret', 'ClassSecretKey');
//
app.use('/', indexRouter);
app.use('/teachers', teachersRouter);
app.use('/lectures', lecturesRouter);
app.use('/students', studentsRouter);
app.use('/auth', authRouter);

app.use('/api', apiRouter);
//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
