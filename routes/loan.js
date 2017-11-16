var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var db = mongoose.createConnection('mongodb://fk:521@192.168.0.161/loan?authSource=admin',{useMongoClient:true})

var investSchema = new Schema({id:Number,title:String,category:String,jiedai_id:String,yield:Number,date:Number,date_unit:String,repayment:String,sum:Number,star:Number,blance:Number,endtime:Date});

var investModel = db.model('Invest',investSchema,'invests');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('k-invest',{});
});

router.get(/\/[0-9]+/, function(req, res, next) {
  var id = req.url.slice(req.url.lastIndexOf('/')+1);
  investModel.find({id:id},function(err,data){
    console.log(data[0]);
  res.render('k-loan', data[0]);
})
});

// router.get('/add',function(req,res,next){
//   new investModel({id:1,title:'江城-房抵1期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:8.0,date:20,date_unit:'天',repayment:'利随本清',sum:10,star:70,blance:1200,endtime:2017-12-01}).save()
//   new investModel({id:2,title:'江城-房抵2期',category:'微投资',jiedai_id:'S-JK171111012QT',yield:8.6,date:20,date_unit:'天',repayment:'利随本清',sum:20,star:70,blance:10200,endtime:2017-12-01}).save()
//   new investModel({id:3,title:'江城-房抵3期',category:'微投资',jiedai_id:'S-JK171111013QT',yield:9.0,date:20,date_unit:'天',repayment:'利随本清',sum:30,star:70,blance:101200,endtime:2017-12-01}).save()
//   new investModel({id:4,title:'江城-房抵4期',category:'微投资',jiedai_id:'S-JK171111014QT',yield:10.2,date:20,date_unit:'天',repayment:'利随本清',sum:40,star:70,blance:201200,endtime:2017-12-01}).save()
//   new investModel({id:5,title:'江城-房抵5期',category:'微投资',jiedai_id:'S-JK171111015QT',yield:9.8,date:3,date_unit:'月',repayment:'利随本清',sum:60,star:70,blance:301200,endtime:2017-12-01}).save()
//   new investModel({id:6,title:'江城-房抵6期',category:'微投资',jiedai_id:'S-JK171111016QT',yield:10.0,date:5,date_unit:'月',repayment:'利随本清',sum:70,star:70,blance:401200,endtime:2017-12-01}).save()
//   new investModel({id:7,title:'江城-房抵7期',category:'微投资',jiedai_id:'S-JK171111017QT',yield:11.1,date:6,date_unit:'月',repayment:'利随本清',sum:100,star:70,blance:801200,endtime:2017-12-01}).save()
//   new investModel({id:8,title:'江城-房抵8期',category:'微投资',jiedai_id:'S-JK171111018QT',yield:12.0,date:12,date_unit:'月',repayment:'利随本清',sum:120,star:70,blance:601200,endtime:2017-12-01}).save()
//   new investModel({id:9,title:'江城-房抵9期',category:'微投资',jiedai_id:'S-JK171111019QT',yield:13.0,date:13,date_unit:'月',repayment:'利随本清',sum:130,star:70,blance:701200,endtime:2017-12-01}).save()
//   new investModel({id:10,title:'江城-房抵10期',category:'微投资',jiedai_id:'S-JK171111010QT',yield:10.6,date:7,date_unit:'月',repayment:'利随本清',sum:180,star:70,blance:801200,endtime:2017-12-01}).save()
//   new investModel({id:11,title:'车帮主-广顺伟业2期',category:'微金宝',jiedai_id:'S-JK111111011QT',yield:9.7,date:216,date_unit:'天',repayment:'利随本清',sum:160,star:80,blance:901200,endtime:2017-12-01}).save()
//   new investModel({id:12,title:'车帮主-广顺伟业3期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:9.7,date:216,date_unit:'天',repayment:'利随本清',sum:170,star:60,blance:501200,endtime:2017-12-01}).save()
//   new investModel({id:13,title:'车帮主-广顺伟业4期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:216,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:301200,endtime:2017-12-01}).save()
//   new investModel({id:14,title:'车帮主-广顺伟业5期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:216,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:15,title:'车帮主-广顺伟业6期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:216,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:16,title:'车帮主-广顺伟业7期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:300,date_unit:'天',repayment:'利随本清',sum:100,star:40,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:17,title:'车帮主-广顺伟业8期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:300,date_unit:'天',repayment:'利随本清',sum:100,star:50,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:18,title:'车帮主-广顺伟业9期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:300,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:19,title:'车帮主-广顺伟业10期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:300,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:20,title:'广顺伟业10期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:21,title:'广顺伟业9期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:12000,endtime:2017-12-01}).save()
//   new investModel({id:22,title:'广顺伟业8期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:23,title:'广顺伟业7期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:24,title:'广顺伟业6期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:25,title:'广顺伟业5期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:26,title:'广顺伟业4期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:27,title:'广顺伟业3期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:28,title:'广顺伟业2期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:29,title:'广顺伟业1期',category:'微金宝',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:30,title:'易企贷-科罗电气1期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:31,title:'易企贷-科罗电气12期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:8.6,date:30,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:32,title:'易企贷-科罗电气11期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:3000,endtime:2017-12-01}).save()
//   new investModel({id:33,title:'易企贷-科罗电气14期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:34,title:'易企贷-科罗电气15期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:35,title:'易企贷-科罗电气16期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:36,title:'易企贷-科罗电气17期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:37,title:'易企贷-科罗电气18期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:38,title:'易企贷-科罗电气19期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:39,title:'易企贷-科罗电气2期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:40,title:'易企贷-科罗电气3期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:41,title:'易企贷-科罗电气4期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:42,title:'易企贷-科罗电气5期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:43,title:'易企贷-科罗电气6期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:44,title:'易企贷-科罗电气7期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:45,title:'易企贷-科罗电气8期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:90,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:46,title:'易企贷-科罗电气9期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:60,date_unit:'天',repayment:'利随本清',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:47,title:'易企贷-科罗电气20期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:80,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:48,title:'易企贷-科罗电气21期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:49,title:'易企贷-科罗电气22期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:60,title:'易企贷-科罗电气23期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:51,title:'易企贷-科罗电气24期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:10.5,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:52,title:'易企贷-科罗电气25期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:53,title:'易企贷-科罗电气26期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:54,title:'易企贷-科罗电气27期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'利随本清',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:55,title:'易企贷-科罗电气28期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:56,title:'易企贷-科罗电气29期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:57,title:'易企贷-科罗电气30期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:58,title:'易企贷-科罗电气31期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:59,title:'易企贷-科罗电气32期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:60,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:60,title:'易企贷-科罗电气33期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:61,title:'易企贷-科罗电气34期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:62,title:'易企贷-科罗电气35期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:63,title:'易企贷-科罗电气36期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:64,title:'易企贷-科罗电气37期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:65,title:'易企贷-科罗电气38期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:66,title:'易企贷-科罗电气39期',category:'海航通宝',jiedai_id:'S-JK171111011QT',yield:11.1,date:90,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:67,title:'易企贷-科罗电气40期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:11.1,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:68,title:'易企贷-科罗电气41期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:11.1,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:69,title:'易企贷-科罗电气42期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:12.1,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:70,title:'易企贷-科罗电气43期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:12.1,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:71,title:'易企贷-科罗电气44期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:12.1,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:72,title:'易企贷-科罗电气45期',category:'微转让',jiedai_id:'S-JK171111011QT',yield:12.1,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:73,title:'易企贷-科罗电气46期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:13.0,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:74,title:'易企贷-科罗电气47期',category:'微投资',jiedai_id:'S-JK171111011QT',yield:13.0,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:75,title:'易企贷-科罗电气48期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:76,title:'易企贷-科罗电气49期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:77,title:'易企贷-科罗电气50期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:100,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:78,title:'易企贷-科罗电气51期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:200,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:79,title:'易企贷-科罗电气52期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:200,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:80,title:'易企贷-科罗电气53期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:200,date_unit:'天',repayment:'等额本息',sum:100,star:70,blance:0,endtime:2017-12-01}).save()
//   new investModel({id:81,title:'易企贷-科罗电气54期',category:'稳赢保',jiedai_id:'S-JK171111011QT',yield:13.0,date:200,date_unit:'天',repayment:'等额本息',sum:100,star:80,blance:0,endtime:2017-12-01}).save()
// })

//请求数据
router.post('/getlist',function(req, res, next){
  //数据库获取全部数据
  investModel.find({},function(err,invest){
  //筛选数据
  console.log(invest);

  //类别筛选
  if(req.body['value'] == 2){
    invest = invest.filter(function(item){
      return item.category == '微投资';
    })
  }else if(req.body['value'] == 3){
    invest = invest.filter(function(item){
      return item.category == '月月盈';
    })
  }else if(req.body['value'] == 4){
    invest = invest.filter(function(item){
      return item.category == '海航通宝';
    })
  }else if(req.body['value'] == 5){
    invest = invest.filter(function(item){
      return item.category == '微金宝';
    })
  }else if(req.body['value'] == 6){
    invest = invest.filter(function(item){
      return item.category == '微转让';
    })
  }else if(req.body['value'] == 7){
    invest = invest.filter(function(item){
      return item.category == '稳赢保';
    })
  }
    console.log(invest);
  //利率筛选
  if(req.body['yield'] == 2){
    invest = invest.filter(function(item){
      return item.yield < 9;
    })
  }else if(req.body['yield'] == 3){
    invest = invest.filter(function(item){
      return (item.yield > 9) && (item.yield <= 10);
    })
  }else if(req.body['yield'] == 4){
    invest = invest.filter(function(item){
      return (item.yield > 10) && (item.yield <= 11);
    })
  }else if(req.body['yield'] == 5){
    invest = invest.filter(function(item){
      return (item.yield > 11) && (item.yield <= 12);
    })
  }else if(req.body['yield'] == 6){
    invest = invest.filter(function(item){
      return item.yield > 12;
    })
  }
  console.log(invest);
  //日期筛选
  if(req.body['date'] == 2){
    invest = invest.filter(function(item){
      if(item['date_unit'] == '月'){
        return item['date'] <= 3;
      }else{
        return item['date'] < 90;
      }
    })
  }else if(req.body['date'] == 3){
    invest = invest.filter(function(item){
      if(item['date_unit'] == '月'){
        return (item['date'] >= 4 )&&(item['date'] <= 9);
      }else{
        return (item['date'] >= 91 )&&(item['date'] <= 270);
      }
    })
  }else if(req.body['date'] == 4){
    invest = invest.filter(function(item){
      if(item['date_unit'] == '月'){
        return (item['date'] >= 10 );
      }else{
        return (item['date'] >= 271 );
      }
    })
  }
  res.json(invest);
  });
})


module.exports = router;
