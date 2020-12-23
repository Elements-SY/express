var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000

// app.use(express.json()) or app.use(bodyParser.json())
// 请求体解析数据方式
app.use(bodyParser.json())

// 这种方式是设置所有请求头统一设置,
// 为了避免混淆知识点讲解我们下一章我们对单个请求做独立设置请求头
app.all('*', function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header('Access-Control-Allow-Methods', '*');
   res.header('Content-Type', 'application/json;charset=utf-8');
   next();
})

// POST 请求
app.post('/name', (req, res, next) => {
   console.log(req.body);
   res.json({ tip: "你发出的是post请求传过来的值为：" + req.body.firstName +'和'+ req.body.lastName});
})

// GET 请求
app.get('/sex', (req, res, next) => {
   console.log(req.query);
   res.json({ tip: "你发出的是get请求传过来的值为：" + req.query.sex});
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