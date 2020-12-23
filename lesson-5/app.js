var express = require('express');
var app = express();
var router = require("./route")
// 创建路由
/*
在浏览器地址栏输入 localhost: 3000/boy/name
显示响应的“张三”
当一个路由有好多个子路由时用app.use(path,router)
如果路由使用app.use()那么前面的app.use中的path将会作为get，post path的前缀
*/ 
app.use('/boy',router) //router路由对象中的路由都会匹配到"/boy"路由后面

// 启动服务
app.listen(3000, function () {
   console.log('app is running at port 3000')
})