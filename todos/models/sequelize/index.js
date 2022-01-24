const {Sequelize} = require('sequelize');
const env = process.env.NODE_ENV || 'development';  // development 모드 설정
const config = require('./config.json')[env];
// sequelize 변수는 Sequelize 객체이며 db에 대한 Connection을 의미 , 모든 쿼리는 이 Connection 으로 이루어짐
const sequelize = new Sequelize(
    config.database, // database
    config.username, // username
    config.password, // password
    config // host, dialect
);

module.exports = sequelize;