var express = require('express');
var router = express.Router();

//mongoose
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

//专题列表
var reportSchema = new Schema({title: String, time: String, content: String});
var rate = mongoose.model("One", reportSchema, 'ratereport');

//利率报告
var lvSchema = new Schema({file: String});
var lvrate = mongoose.model("lvreport", lvSchema, "lvreport");

//全部新闻
var allSchema = new Schema({idx: String, title: String, time: String, content: String});
var allrate = mongoose.model("allnews", allSchema, "allnews");

//媒体查询
var mediaSchema = new Schema({title: String, time: String, content: String});
var mediarate = mongoose.model("newsmedia", mediaSchema, "newsmedia");

//微金所头条
var topSchema = new Schema({title: String, time: String, content: String});
var toprate = mongoose.model("newstop", topSchema, "newstop");

//行业资讯
var jobSchema = new Schema({title: String, time: String, content: String});
var jobrate = mongoose.model("newsjob", jobSchema, "newsjob");

//新闻文章
var articleSchema = new Schema({title: String, time: String, content: String});
var articles = mongoose.model("article", articleSchema, "article");
/* GET home page. */

router.get('/', function(req, res, next) {

  //专题列表
  rate.find({}, function(err, zt) {

    //利率报告
    lvrate.find({}, function(err, lv) {

      //全部新闻
      allrate.find({}, null, {limit: 10},function(err, all) {
console.log(all);
        //媒体查询
        mediarate.find({}, function(err, media) {

          //媒体查询
          toprate.find({}, function(err, top) {

            //行业资讯
            jobrate.find({}, function(err, job) {

              res.render('news', {

                //专题列表
                ratereport: zt,
                //利率报告
                lvreport: lv,
                //全部新闻
                allnews: all,
                // 媒体查询
                newsmedia: media,
                //微金所头条
                newstop: top,
                //行业资讯
                newsjob: job,

                //更新历史
                historys: [
                  {years: "2017", date: '07月13日', dates: "2017年07月13日", ct1: "1、微金所用户平台密码安全限制", ct2: "2、优惠券使用优化", ct3: "3、修改服务协议，增加3.11条" },
                  {date: '06月30日', dates: "2017年06月30日", ct1: "1、连连支付优化", ct2: "2、连连可提现金额优化", ct3: "3、修改微投资借贷合同" },
                  {date: '05月30日', dates: "2017年05月30日", ct1: "1、增加连连支付通道", ct2: "2、稳赢保借款申请页面优化", ct3: "3、验证码优化" },
                  {date: '04月27日', dates: "2017年04月27日", ct1: "1、新手专区文案修改", ct2: "2、微金宝展示优化", ct3: "3、借款申请页面优化" },
                  {date: '01月20日', dates: "2017年01月20日", ct1: "1、标的详情页增加发起转让时限提示", ct2: "2、发布2016年运营报告", ct3: "" },
                  {years: "2016", date: '12月19日', dates: "2016年12月19日", ct1: '1、修正个人中心的"已充值总额"和"已提现总额"', ct2: '2、优化回款计划中"未发起赎回的月月盈本息"计算规则', ct3: "3、港澳台用户实名认证优化" },
                  {date: '5月18日', dates: "2016年5月18日", ct1: "1、新增月月盈产品，更多投资选择", ct2: "2、金房宝、车帮主标的展示优化", ct3: "3、微投资标的详情增加合同范本", ct4: "4、VIP 年化计算展示优化"},
                  {date: '3月15日', dates: "2016年3月15日", ct1: "1、新增海航通宝产品", ct2: "2、标的增加风险评估和风险提示", ct3: "3、标的产品星级显示优化", ct4: "4、最新动态的专题列表增加评级术语释义" },
                  {date: '01月20日', dates: "2017年01月20日", ct1: "1、标的详情页增加发起转让时限提示", ct2: "2、发布2016年运营报告", ct3: "" },
                  {years: "2015", date: '12月21日', dates: "2015年12月21日", ct1: '1、圣诞节和元旦营销活动', ct2: '2、红包雨规则调整', ct3: "3、回款日历" , ct4: "4、可信网站身份认证" },
                  {date: '11月19日', dates: "2015年11月19日", ct1: '1、特别推荐展示优化 ', ct2: '2、标的详情展示优化', ct3: "3、提现操作提示信息优化 " , ct4: "4、红包雨活动用户体验优化" },
                  {date: '10月28日', dates: "2015年10月28日", ct1: '1、微金宝优化 ', ct2: '2、找回密码用户体验改善', ct3: "3、公司资质展示优化" , ct4: "4、标的及标的详情展示优化 ", ct5: "5、已投项目展示优化"},
                  {date: '10月19日', dates: "2015年10月19日", ct1: '1、新增新手专区', ct2: '2、红包雨活动用户体验优化'},
                  {date: '08月20日', dates: "2015年08月20日", ct1: '1、红包雨活动 ', ct2: '2、首页界面显示优化'},
                  {date: '10月28日', dates: "2015年10月28日", ct1: '1、微金宝优化 ', ct2: '2、找回密码用户体验改善', ct3: "3、公司资质展示优化" , ct4: "4、标的及标的详情展示优化 ", ct5: "5、已投项目展示优化"},
                ]

              });
            });
          });
        });
      });
    });
  })
});


router.post('/all', function(req, res) {
  allrate.find({}, null, {skip: Number(req.body.value)*10+1, limit: 10}, function(err, docs) {
    res.status(200);
    res.send(docs)
  });
});

router.get(/\/[0-9]+/, function(req, res){
  var ul = req.url.slice(req.url.lastIndexOf("/") + 1);

  articles.find({id: ul}, function(err, docs) {
console.log(docs);
      res.render('article', {
        article: docs
      })
  });
})


module.exports = router;
