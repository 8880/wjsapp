var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

mongoose.connect('mongodb://fk:521@192.168.0.161/news?authSource=admin',{useMongoClient:true})

var itemSchema = new Schema({
  items: Array
});
var inverstItemSchema =new Schema({
  inverstItem:Array
})
var IndexOne = mongoose.model("Items", itemSchema,"items");

var IndexTwo = mongoose.model("Two", inverstItemSchema ,"inverstItem");
/* GET home page. */
router.get('/',function(req,res,next){

  IndexOne.find({}, function (err, data) {
    console.log(data);
    if (!err) {
      IndexTwo.find({}, function(err, data1) {
        // console.log(data);
        if (!err) {
          res.render('index', {items: data[0].items, inverstItem: data1[0].inverstItem})
        } else {
          console.log(err);
        };
      })
    } else {
      console.log(err);
    };
  });
});


router.get('/security',function(req,res,next){
  res.render('aq-aqbz')
})
router.get('/app',function(req,res,next){
  res.render('aq-app')
})
router.get('/deposit',function(req,res,next){
  res.render('aq-cg')
})



module.exports = router;
