const express = require('express'); // express import 

// Routers
const indexRouter = require('./routes/index');
const helloRouter = require('./routes/hello');

const app = express(); // app 변수에 express 함수 호출 

app.use('/', indexRouter);
app.use('/hello', helloRouter);

module.exports=app;