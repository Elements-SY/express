var express = require('express');
var path = require('path');
var app = express();

// 使用静态资源
app.use('/images', express.static(path.join(__dirname,'/public/images')));

// app.use(express.static(path.join(__dirname,'/public')));
// 等价于app.use('/images', express.static(path.join(__dirname,'/public/images')));
// app.use('/images', express.static(path.join(__dirname,'/public/images')));
// http://localhost:3000/images/tree.jpg
// 在下一章我们将看到home.html中是如何引入css的

// 启动服务
app.listen(3000, function () {
   console.log('app is running at port 3000')
})