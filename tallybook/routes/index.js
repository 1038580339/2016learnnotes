var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/upload',function (req,res) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'mydb'
    });

    connection.connect();

    connection.query('INSERT INTO content(name,date,number,bool) VALUES(?,?,?,?)',[req.body.name,req.body.date,req.body.number,req.body.yn], function(err, rows, fields) {
        if (err) throw err;

       res.json({a:1});
    });

    connection.end();
});
router.get('/get',function (req,res) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'mydb'
    });

    connection.connect();

    connection.query('SELECT * FROM CONTENT', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);
    });

    connection.end();
});
router.post('/delete',function (req,res) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'mydb'
    });

    connection.connect();

    connection.query('DELETE FROM content where name=?',[req.body.name], function(err, rows, fields) {
        if (err) throw err;

        console.log(1);
    });

    connection.end();
});
module.exports = router;
