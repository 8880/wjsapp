var s = "";
$(".Mary-dian").click(function(){

  s = $(".Mary-talkbox").attr("class");
  if (s === "Mary-talkbox Mary-jiang") {
    $(".Mary-talkbox").attr("class", "Mary-talkbox Mary-sheng");
  }else {
    $(".Mary-talkbox").attr("class", "Mary-talkbox Mary-jiang");
  }
});

function flag(arg){
    return arg > 9 ? arg  : "0" +　arg;
}

var d = new Date();
$('.Mary-time').html('今天'+ flag(d.getHours())+':'+ flag(d.getMinutes()));
