const express = require('express');
const router= express.Router();
const nodeserver = require('G:/Blog/server')
//GET METHOD
router.get('/viewBlog',(req,res)=>
{
   // res.send('GET WORKS');
   var query = "select * from blog";
   nodeserver.executeQueryGet(res, query);
}
);
router.post('/addBlog',function(req , res){     

var Parameters = [
    {name:'title', value:req.body.title},
    {name:'topic', value:req.body.topic},
    {name:'content', value:req.body.content}
];
var pn = req.body;
//var tech = req.body.obj.Technology;
//var pd =req.body.obj.ProjectDetails;

console.log(pn);


    var query = "INSERT INTO blog (title,topic,content) VALUES (@title,@topic,@content)";
    nodeserver.executeQueryPost(res, query, Parameters);

});
module.exports=router;