var express = require('express');
var app = express();

// 创建路由
/*
在浏览器地址栏输入 localhost: 3000/name
显示响应的“张三”
app.use(虚拟path，回调函数)
*/ 

app.use('/name',function(req,res){
   res.send('张三');
})

app.use('/sex',function(req,res){
   res.send('Boy');
})

app.use('/age',function(req,res){
   res.send('25岁');
})

// 启动服务
app.listen(3000);