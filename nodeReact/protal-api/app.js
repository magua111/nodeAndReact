var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var db = require('./connet/mysql')
var index = require('./routes/index')
const {logger} = require('./until/logger');
var app = new express
// var log4js = require('log4js');
// 解析post请求的请求参数
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser('sessionFun'))
app.use(session({
  store: session.store,
  cookie: {maxAge: 60},
  secret: '50',
  resave: true,
  saveUninitialized: true,
  name: 'protal_api'
}))


logger.fatal('第一个log 日志');








var server = require('http').Server(app)
// var io = require('socket.io')(server)

// 建立连接  每个客户端socket链接的时候都会出发connection 事件
// io.on('connection', function (socket) {
//   // 当客户端发出“new message”时，服务端监听到并执行相关代码
//   socket.on('new message', function (data) {
//       // 广播给用户执行“new message”
//       console.log(data)
//       socket.broadcast.emit('new message', data);
//   });
  
//   // 当客户端发出“add user”时，服务端监听到并执行相关代码
//   socket.on('add user', function (username) {
//       socket.username = username;
//       //服务端告诉当前用户执行'login'指令
//       socket.emit('login', {});
//   });
  
//   // 当用户断开时执行此指令
//   socket.on('disconnect', function () {});
// });
// io.listen(1111)


// 设置所有用户都可以访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//   else  next();
// });

app.use('/',index)

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})