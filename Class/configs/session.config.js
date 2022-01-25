const session = require("express-session")
// 서버에 파일 형식의 세션을 만든다. 
// 서버가 리부팅 되어도 세션정보는 유지된다.
const FileStore = require("session-file-store")(session)

const fileStoreOptions = {retries: 0};

module.exports={
    store:new FileStore(fileStoreOptions),
    secret:'salty salt',
    resave:false,
    saveUninitialized:false,
};