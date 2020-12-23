var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

// 端口号
var port = 3000

// 转发接口
var url = 'http://api.63code.com/garbage/api.php';

// app.use(express.json()) or app.use(bodyParser.json())
// 请求体解析数据方式
app.use(bodyParser.json())

// 这种方式是设置所有请求头统一设置,
// 这一章我们对单个请求做独立设置请求头
app.all('*', function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header('Access-Control-Allow-Methods', '*');
   res.header('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
   next();
})

// 转发接口参数
function getOptions(url, method, params) {
   var options = {}
   if (method.toUpperCase() == 'GET') {
      var options = {
         timeout: 5000, // 设置超时
         method: method, //请求方式
         url: url,
         qs: params
      }
   } else {
      var options = {
         timeout: 5000, // 设置超时
         method: method, //请求方式
         url: url,
         form: params
      }
   }
   return options
}

// GET 请求
app.get('/garbage', (req, res, next) => {
   // 转发传参
   var options = getOptions(url, 'GET', req.query)
   // 接口转发
   request(options, (error, response, body) => {
      var result = {}
      if (!error && response.statusCode == 200) {
         result = JSON.parse(body);
         console.log(result);
      } else {
         result = JSON.parse(body);
      }
      // 返回给前端
      res.json(result);
   });
})

// POST 请求
app.post('/name', (req, res, next) => {
   console.log(req.body);
   // 独立设置请求头
   res.header('Access-Control-Allow-Methods', 'POST');
   var data = { tip: "你发出的是post请求传过来的值为：" + req.body.firstName +'和'+ req.body.lastName}
   res.status(200).json({data: data, status: 'success'}); 
})

// 启动服务
app.listen(port, () => {
   console.log('app is running at port' + port)
});

/*
1.处理fromData数据流
app.use(bodyParser.urlencoded())
2.处理Json数据格式
app.use(bodyParser.json())
3.处理文本数据
bodyParser.text(options)
4.处理Buffer流数据
bodyParser.raw(options)
*/