var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  // 参数一：模板名称；参数二：渲染模板的数据
  res.render('index', '');
});

router.get('/home', function (req, res, next) {
  // 参数一：模板名称；参数二：渲染模板的数据
  res.render('home', '');
});

module.exports = router;