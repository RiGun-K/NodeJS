const {DataTypes, Model} = require('sequelize');
const sequelize = require('./index');

// // 조회
// await Todo.findAll();
// // 추가
// await Todo.create({job:req.body.job})
// // 삭제
// await Todo.destroy({
//     where: {
//         todoId:req.params.todoId 
//     }
//  });

class Todo extends Model { };
Todo.init({ // Data 정의
    todoId:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    job:{
        type:DataTypes.STRING
    }
}, {
    sequelize,  // Connection
    modelName:'node',   // DB 이름
    tableName:'todo',   // TABLE 이름
    timestamps:false    // no createdAt, no updatedAt
});

module.exports = Todo;