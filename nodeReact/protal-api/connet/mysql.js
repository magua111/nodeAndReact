var mysql = require('mysql');
var setting = require('../common/setting')


// 建立连接池  因为一个数据库的链接和断开的成本是很高的
var pool = mysql.createPool(
  //  这里传入的是  原生 mysql.createConnection 的参数
  setting.MYSQL_CONFIG
)

var db = {
  pool : pool
}



// 获取连接
db.getConnection = function () {
  pool.getConnection(function(err,connection){
    if(err){
      console.log(11111)
      callback(null)
    }
    callback(connection)
  })
}

console.log(db.pool.query)

module.exports = db




// var db = {}
// db.query = function (data,sqlNum,fn) {
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     database: 'user',
//     user: 'root',
//     password: '123'
//   });
//   connection.connect(function (err) {
//     if (err) {
//       console.log("连接失败");
//     } else {
//       console.log("连接成功");
//     }
//   })

//   var query = data + connection.escape(sqlNum);
//   connection.query(query, function(err,results) {
//     console.log("查询成功");
//     fn(results);
//   })
// }
// module.exports = db