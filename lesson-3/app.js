var express = require('express');
var app = express(); // 调用主程序

/*
 丄节内容我们说express就是NodeJS的一个http模块,只不过对其做了改善。
 那么既然是一个http模块，那么也就意味着请求方式有get、post、put、delete等；
 我们来看一下如何创建一个基本请求。
 本节以及下一节我们不讲解post请求亦不详解get请求，因为如果详解会牵扯很多基础API，
 待我们学完之后再去讲解post和get请求。
 post和get请求详解在lesson-9课程中
*/ 

// get 请求 启动服务之后在浏览器输入http://localhost:3000/getmt即可
app.get('/getmt', function(req, res) { // 定义一个get请求，
   res.send('hello world!'); // 发送给前端一个hello world!字符串数据。
});

// post 请求 显然post请求是不可在浏览器输入http://localhost:3000/postmt
// 我们需要做请求Ajax请求
app.post('/postmt', function (req, res) {
 res.send('POST request to the homepage')
})

/*
app.get() / app.post()它们的第一个参数是请求的地址，第二个参数是发送请求的回调函数
请求的地址和响应的数据可以顺便定义
*/ 

// 启动服务
app.listen(3000, function () { // 调用监听http端口的方法，默认值为8080
   console.log('app is running at port 3000')
})
