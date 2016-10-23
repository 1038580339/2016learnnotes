var express = require('express');
var router = express.Router();
var mysql =require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'newdata'
// });

// connection.connect();

// connection.query("SELECT * from posts where ID='234'", function(err, rows, fields) {
//   if (err) throw err;

  // console.log('The solution is: ', rows[0].ID);
  //res.render("index",rows[0].post_content);

// });

// connection.end();