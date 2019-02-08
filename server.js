// More here -> https://www.npmjs.com/package/mssql
var path = require("path");
const computerName = require('computer-name');
console.log(computerName());

var express = require('express');
var app = express();

app.get('/', function (req, res) {
var sql = require('mssql/msnodesqlv8');
var config = {
  connectionString: 'Driver=SQL Server;Server=IRSDSK257\\MSSQLSERVER2014;Database=Angular;Trusted_Connection=true;'
};
sql.connect(config, err => {
  new sql.Request().query('select * from blog', (err, result) => {
      //to execute procedures => 
      //new sql.Request().execute('GETPROJECTS',function(err, result){ 
    if(err) { // SQL error, but connection OK.
      console.log("  Shirtballs: "+ err);
    } else { // All is rosey in your garden.
      console.dir(result.recordset);
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(result.recordset);
      sql.close();
    };
  });
});

sql.on('error', err => { // Connection borked.
  console.log(".:The Bad Place:.");
  console.log("  Fork: "+ err);
});

});


var server = app.listen(8050,'192.168.9.175', function () {
    console.log('Server is running..');
});



