var mysql = require('../../connet/mysql')
// 解决异步
var async = require('async')

exports.login = function (req, res, next) {
  var body = req.body
  var name = body.userName
  // 查询mysql
  mysql.pool.query(`SELECT * FROM user where name = ?`, name, function (error, resData, fields) {
    if (error) {
      res.json({
        code: 'E0003',
        message: '用户查询失败'
      })
      errBack(req, res)
    }
    if (resData.length == 0) {
      var insert = 'INSERT INTO user(name,password) VALUES(?,?)'
      mysql.pool.query(insert, [body.userName, body.password], function (error, resData, fields) {
        if (error) {
          res.json({
            code: 'E0001',
            message: '用户插入失败'
          })
          return
        }
        res.json({
          code: 200,
          message: resData
        })
      })
    } else {
      res.json({
        code: 'E0002',
        message: '用户已经存在'
      })
      return
    }
  })
}

// 定义错误时候执行的方法
function errBack(req, res) {
  res.json({
    code: 'E0007',
    message: '查询失败'
  })
  return
}