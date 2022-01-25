const session = require("express-session")
// 서버에 파일 형식의 세션을 만든다. 
// 서버가 리부팅 되어도 세션정보는 유지된다.
const FileStore = require("session-file-store")(session)

const fileStoreOptions = {retries: 0};

module.exports={
    store:new FileStore(fileStoreOptions),  // 마리아DB등을 사용시 new mariadb로 변경가능
    secret:'my session of rigun',
    resave:false,
    saveUninitialized:false,
};