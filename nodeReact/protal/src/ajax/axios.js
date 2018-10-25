var axios = require('axios')

var axiosFun = {}
// post  请求
axiosFun.ajaxPost = function(URL,url,data,that,callback){
  axios({
    method :'POST',
    header : {'Content-type' : 'application/json',},
    url : URL + url,
    data : data
  }).then(
    function(res){
      console.log(url + 'post请求返回ok')
      callback(that,res)
    }
  ).catch(function(err){
    // alert('post 发送失败')
    console.log(err)
  })
}
// get请求
axiosFun.ajaxGet = function(URL,url,that,callback){
  axios({
    method : 'GET',
    headers:{'Content-type':'application/json',},
    url:URL+url,
    withCredentials:true
  })
  .then(function(res){
    console.log('url' + 'get请求发送成功')
    console.log(res)
    callback(that,res)
  })
  .catch(function(err){
    // alert('请求出错了')
    console.log(err)
  })
}

export default axiosFun
