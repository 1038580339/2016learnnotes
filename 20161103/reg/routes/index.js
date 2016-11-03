var express = require('express');
var router = express.Router();
var mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post("/zc",function (req,res) {
  let allData = Buffer.alloc(0);
  req.on("data", data=> {
    allData = Buffer.concat([allData, data]);
});
  req.on("end", ()=> {
    var obj = JSON.parse(allData.toString());
    connection.connect();
    connection.query('INSERT INTO users(id,user,pass,age) VALUES(?,?,?,?)',[obj.id,obj.user,obj.pass,obj.age], function(err, rows, fields) {
      if (err) throw err;

      console.log(rows);
    });

    connection.end();
});
});
router.get("/reg.ejs",function (req,res) {
  res.render('reg');
});
router.post("/dl",function (req,res) {
  let allData = Buffer.alloc(0);
  req.on("data", data=> {
    allData = Buffer.concat([allData, data]);
  });
  req.on("end", ()=> {
    var obj = JSON.parse(allData.toString());
    connection.connect();
    connection.query('SELECT * FROM users WHERE id='+obj.id+'&&pass='+obj.pass, function(err, rows, fields) {
      if (err) throw err;

      res.send(rows);
    });

    connection.end();
  });
});
module.exports = router;
