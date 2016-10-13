var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello', function(req, res) {
     res.render(req.query.x+req.query.y+req.query.color+req.query.width);
 //  console.log(req.query.x);
 // console.log(canvas);
});

module.exports = router;
