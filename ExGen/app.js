var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

////////// 주소 할당 //////////
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var infoRouter = require('./routes/info');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  // views 폴더를 view로 사용하겠다.
app.set('view engine', 'pug');                    // view 템플릿 엔진을 pug로 사용하겠다. ( 동적으로 만듬 )

app.use(logger('dev'));
app.use(express.json());  // 객체와 json을 자동으로 서로 변환 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  // 임시 데이터를 사용자 PC에 저장 
app.use(express.static(path.join(__dirname, 'public')));  // static 파일들은 public 폴더로 

////////// 주소 할당 //////////
app.use('/', indexRouter);  // app.js에서 indexRouter에 대한 함수는 '/' 에서 처리 
app.use('/users', usersRouter);
app.use('/info', infoRouter);

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
