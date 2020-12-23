var express = require('express');
var app = express(); // 调用主程序

// 启动服务
app.listen(3000, function () { // 调用监听http端口的方法，默认值为8080
   console.log('app is running at port 3000')
})
// 从上述不难发现express的全局对象就是一个http。
// 我们来看一下NodeJS的http & https模块

// 启动express服务如下：
// 在当前目录下打开终端输入：node app.js or npm run start