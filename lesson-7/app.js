const express = require('express');
const path =require('path');
const app = express();

// 设置静态资源路径
app.use(express.static(path.join(__dirname,'/public')));

// 设置模板路径
app.set('views', path.join(__dirname,'views'));

/*
设置视图引擎
http://expressjs.com/en/4x/api.html#app.set
采用ejs文档类型的作为视图模板
也就是说模板引擎对哪种文件类型做渲染，是html类型的还是ejs类型的文件，
如果你设置的模板目录中存放的是HTML文件，那么你设置的视图引擎也必须要选择HTML类型的作为视图引擎模板。
*/ 
app.set('view engine','html'); 

/*
给HTML注册ejs模板引擎，这里可以理解成在html文件中引入了ejs语法，
既然引入了ejs语法，也就是说在html文件中可以使用ejs语法。
app.engine(注册什么类型的视图文件，采用什么模板引擎作为渲染注册该类型的视图文件)
也就是说采用哪种类型文档注册视图文件。
如果你设置的模板目录中存放的是HTML文件，并且以HTML作为视图引擎模板，
那么也必须要注册HTML，至于采用哪种模板引擎(ejs还是express-art-template)无关重要。
如果以html作为视图文件而去渲染ejs文件将会报错，
我们可以在浏览器地址栏中输入http://localhost:3000/home查看结果
*/ 
app.engine('html', require('ejs').__express); // 在HTML视图文件中采用哪种模板引擎工具作为渲染

app.get('/', (req, res)=>{
    res.render('index',{title: '北京'});
});

app.get('/home', (req, res)=>{
    res.render('home','');
});

// 启动服务
app.listen(3000,()=>{
    console.log('app is running at port 3000')
});