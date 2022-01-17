const http = require('http');
const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'});

    if(request.url=='/hello'){
        response.end('Hello 경로로 오면 출력');
    } else {
        response.end('그외 Home 출력');
    }
});
server.listen(3000);

// 터미널에서 Ctrl + C 하면 꺼짐

/* url=='/hello' 는 가상의 주소임 http 에서 저렇게 쳤을때 뜬다는 뜻 
   서버 다시 껏다 켜야함 ( 자동 리부팅 기능이 없음 ) <- 라이브러리가 따로 있음
   출력에서 한글은 패치 안됨
*/

/*
  위 require('http') 는 노드에 내장되어있는 라이브러리를 import함 
  하지만 내 폴더경로에 있는 객체를 import 하려면 상대경로(./ 또는 ../)사용
  */

/*
  200 = 통신이 성공했다는 신호 ( 꼭 안 적어도 됨 )
  response.end = 이것을 호출함으로써 요청은 끝났다는 뜻
*/
