var express = require('express');
var router = express.Router();

/* GET home page. */
var t=[{name:'杨杭鑫',password:'11'}];
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/denglu',function (req,res) {
  for(var i=0;i<t.length;i++){
    if(req.query.name==t[i].name&&req.query.password==t[i].password){
      res.json({result:"登录成功",name:req.query.name});
    }
  }
});
router.get('/zhuce',function (req,res) {
  console.log(req.query.name);
  var p={name:req.query.name,password:req.query.password};
  t.push(p);
  res.json({result:"注册成功"});
  console.log(t);
});
module.exports = router;
