var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schemas = mongoose.Schema;

mongoose.connect("mongodb://fk:521@192.168.0.161/news?authSource=admin", {useMongoClient: true});

var stuSchemas = new Schemas({username: String, pwd: String});

var Wjsx = mongoose.model("yhxxa", stuSchemas, "yhxx");


router.get('/',function(req,res,next){
  res.render('kdl')
});



router.post('/dl', function(req, res){
  Wjsx.find({username: req.body.um}, function(err, docs){

    if (docs[0]) {

      if (docs[0].pwd == req.body.pw) {
        res.status(200);
        res.json({value: 1});
      } else {
        res.status(200);
        res.json({value: 2});
      }
    } else {
      res.status(200);
      res.json({value: 2});
    }
  })
})


module.exports = router;
