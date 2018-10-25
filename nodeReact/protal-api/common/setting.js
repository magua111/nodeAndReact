// 判断是什么环境链接哪个数据库
var config  = require('./config')

switch(config.envType){
  case 'DEV':
    module.exports = require('./setting/setting.dev')
    break;
  case 'UAT':
    module.exports = require('./setting/setting.uat')
}