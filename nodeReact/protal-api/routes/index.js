var express = require('express')
var router = express.Router()

var allaModule = {
  user : require('./login/login')
}
// 路由管理
router.all('/api/:module/:action',function(req,res,next){
  allaModule[req.params.module][req.params.action](req,res,next)
})

module.exports = router