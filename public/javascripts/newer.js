
var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName("show")[0].children;

for (var  i = 0; i < tabs.length; i++) {


  tabs[i].index = i;
  tabs[i].onclick = function(event) {

    for (var j = 0; j < tabs.length; j++) {
      tabs[j].className = "";
      contents[j].className = "";
    }
    this.className = "kl";
    contents[this.index].className = "active";
  };
}


var btnspan = document.getElementsByClassName("Mary-question");
var str = "";
$(".Mary-question").click(function() {
  console.log($(this).children());
  str = $(this).children().attr("class");
  console.log(str);
  if (str == "iconfont icon-jia") {
    $(this).children().attr("class", "iconfont icon-jia1");

  } else {
    $(this).children().attr("class", "iconfont icon-jia");

  };
});
