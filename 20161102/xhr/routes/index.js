var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer({dest: "public"});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/file',upload.single("file"),function (req,res){
   console.log(1);
});

module.exports = router;
