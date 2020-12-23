var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  let data = {
      title: '水果',
      list: ['apple', 'orange', 'banana']
  }
  res.send(data);
});

router.get('/home', function (req, res, next) {
  res.send('张三');
});

module.exports = router;