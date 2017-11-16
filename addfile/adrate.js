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

//创建了一个表示用于信息的Schema
var stuSchema = new Schema({title: String, time: String, content: String});

//创建一个Model
/* 其中的 “One”不是创建的集合的名字，集合名字是 "ones"
对StuOne进行操作，就是操作该集合 */
var StuOne = mongoose.model("One", stuSchema, "ratereport");

//创建一个Entity , 一个文档

// 创建一个文档，并且插入到该集合中即可
new StuOne({title: "【微公告】关于车帮主及金房宝产品提前还款的说明", time: "2016-05-18", content: "车帮主及金房宝产品是微金所平台针对借款人推出的优质短期借款项目，该借款一般用于临时资金周转，所以在借款人资金充裕时， 可能会出现借款人提前还款的情况。"}).save(function(err, data){
  if (!err) {
    console.log('insert OK!', data);
  } else {
    console.log(err);
  }


//关闭数据库连接
// db.close();
mongoose.disconnect();
});
