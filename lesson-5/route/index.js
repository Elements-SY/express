var express = require('express')
var router = express.Router()

router.get('/name',function(req,res){
   res.send('张三');
})

router.get('/age',function(req,res){
   res.send('25岁');
})

module.exports = router;