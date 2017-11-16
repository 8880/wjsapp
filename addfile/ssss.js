var mongoose = require('mongoose');
var db = mongoose.connection;

//解决提示更新问题
mongoose.Promise = global.Promise;

db.on('error', function(error){
  console.log('connect error', error);
});

db.on('open', function(){
  console.log('connect ok');
});

//stus为创建的数据库
mongoose.connect('mongodb://fk:521@127.0.0.1/news?authSource=admin', {useMongoClient: true});

/************开始操作数据库************************/

//创建一个Schema
var Schema = mongoose.Schema;

var stuSchema = new Schema({file: String});


var StuOne = mongoose.model("One", stuSchema, "allnews");



StuOne.find({}, null, {skip: 10 , limit: 6},function(err, docs){
   console.log(docs);
 });
