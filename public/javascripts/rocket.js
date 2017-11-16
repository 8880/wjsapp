var rocket = document.getElementById("rocket");
window.onscroll = function () {
  var temp = getScrollValue();
  if (temp.top >= 666) {
    $(rocket).show();
  } else {
    $(rocket).hide();
  }
};


var timer;
rocket.onclick = function(){
  var current = document.body.scrollTop;

  clearInterval(timer);
  timer = setInterval(function(){
    current -= 60;
    if (current <= 10){
      window.scrollTo(0,0);
      clearInterval(timer);
    }
    window.scrollTo(0,current);
  },10);
};
