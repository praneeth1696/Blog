const computerName = require('computer-name');
console.log(computerName());
const http = require('http');
const path = require('path');
//const router = express.Router();
bodyParser = require('body-parser'),
cors = require('cors');
var express = require('express');
var app = express();
const port = process.env.PORT || 8050;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const post = require('G:/Blog/server-routes/post')
app.use(express.static(__dirname + '/dist/Blog'));
app.use('/post',post);
app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));
var sql = require('mssql/msnodesqlv8');
var config = {
  connectionString: 'Driver=SQL Server;Server=IRSDSK257\\MSSQLSERVER2014;Database=Angular;Trusted_Connection=true;'
  //connectionString: 'Data Source=IRSDSK257\\MSSQLSERVER2014;Initial Catalog=Angular;Integrated Security=True;Pooling=False'
};


var  executeQueryGet = function(res, query ){ 
sql.connect(config, err => {
    new sql.Request().query(query, (err, result) => {
        //to execute procedures => 
       // new sql.Request().execute('GETPROJECTS',function(err, result){ 
      if(err) { // SQL error, but connection OK.
        console.log("  sqlerror: "+ err);
      } else { // All is rosey in your garden.
        console.dir(result.recordset);
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(result.recordset);
        sql.close();
      };
    });
  });
}
  
var  executeQueryPost = function(res, query,parameters ){  
  sql.connect(config, err => {
      var request=new sql.Request();
      // Add parameters
      parameters.forEach(function(p) {
          request.input(p.name, p.value);
      });
      request.query(query, (err, result) => {
        //to execute procedures => new sql.Request().execute('GETPROJECTS',function(err, result){ 
      if(err) { // SQL error, but connection OK.
        console.log("  sqlerror: "+ err);
      } else { // All is rosey in your garden.
       console.dir(result.recordset);
       res.setHeader('Access-Control-Allow-Origin', '*')
       res.status(200).json(result.recordset);
        sql.close();
      };
    });
  });
  }



  const server = http.createServer(app);
  server.listen(port,() => console.log('Running...'));
  exports.executeQueryGet = executeQueryGet;
  exports.executeQueryPost = executeQueryPost;
  //module.exports = router ;