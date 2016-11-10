var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/upload",function (req,res) {
  console.log(req.body);
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb'
  });
  connection.connect();
  
  connection.query("INSERT INTO content(title,theme,article) VALUES(?,?,?)",[req.body.title,req.body.theme,req.body.content],
      function(err, rows, fields) {
    if (err) throw err;
   else(res.json({num:2}));
    //console.log('The solution is: ', row);
  });
  
  connection.end();
});
router.get("/getdata",function (req,res) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb'
  });
  connection.connect();

  connection.query("SELECT * FROM content",
      function(err, rows, fields) {
        if (err) throw err;
        else{
          res.json(rows);
        }
        //console.log('The solution is: ', row);
      });

  connection.end();
});
module.exports = router;
