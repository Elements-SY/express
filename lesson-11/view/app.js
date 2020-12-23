const express = require('express');
const path = require('path');
const app = express();
var router = require("./route")

// 使用静态资源
app.use(express.static(path.join(__dirname,'/public')));

// 设置模板路径
app.set('views', path.join(__dirname, 'page'));

// 设置视图引擎
app.set('view engine', 'html');

// 使express兼容art-template模板引擎
app.engine('html', require('express-art-template'));

app.use('/',router)

app.listen(3001, () => {
    console.log('app is running at port 3001')
});