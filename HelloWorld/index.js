const http = require('http');
const app = require('./app');   
// 만들어준 express 객체 , ./ 는 나와 같은 폴더

const server = http.createServer(app);  // 파라미터로 넘겨준다 (app)
const port=3000;
server.listen(port);

