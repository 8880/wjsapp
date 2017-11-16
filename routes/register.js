var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', function(error) {
  console.log(error);
});
db.on('open', function() {
  console.log("connect ok!");
});

mongoose.connect("mongodb://fk:521@192.168.0.161/news?authSource=admin", {useMongoClient: true});

var stuSchema = new Schema({username: String, pwd: String});

var Wjsxx = mongoose.model("yhxx", stuSchema, "yhxx");



router.get('/', function(req, res) {
  res.render('kzc')
})


router.post('/sigin', function(req, res) {

  new Wjsxx({username: req.body.sguser, pwd: req.body.sgpaswd}).save(function(err, data) {
    if (!err) {
      res.status(200);
      res.send("ok")
    } else {
      console.log(err);
    }
  });
})

module.exports = router;
