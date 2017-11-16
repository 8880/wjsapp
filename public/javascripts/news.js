var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName("show")[0].children;


for (var v = 0; v < tabs.length; v++) {

  tabs[v].index = v;
  tabs[v].onclick = function(event) {

    for (var j = 0; j < tabs.length; j++) {
      tabs[j].className = "";
      contents[j].className = "";
    }

    this.className = "kl";
    contents[this.index].className = "active";
  };
}

//分页
//利率报告
$('.report-list li').addClass('newshide');
for (var k = 1; k < 8; k++) {
  $('.report-list li:nth-child(' + k + ')').addClass('newsshow')
}

$("#page").paging({
  pageNo: 1,
  totalPage: 7,
  totalSize: 300,
  callback: function(num) {
    $('.report-list li').addClass('newshide')
    $('.report-list li').removeClass('newsshow')
    if (num == 1) {
      for (var k = num; k < num + 7; k++) {
        $('.report-list li:nth-child(' + k + ')').addClass('newsshow')
      }
    } else {
      for (var k = num * 7 - 6; k < num * 7 + 1; k++) {
        $('.report-list li:nth-child(' + k + ')').addClass('newsshow')
      }
    }
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
})

//全部新闻

// $('.allnewss li').addClass('newshide');
// for (var k = 1; k < 11; k++) {
//   $('.allnewss li:nth-child(' + k + ')').addClass('newsshow')
// }
// $("#page1").paging({
//   pageNo: 1,
//   totalPage: 100,
//   callback: function(num) {
//     $('.allnewss li').addClass('newshide')
//     $('.allnewss li').removeClass('newsshow')
//     if (num == 1) {
//       for (var k = num; k < num + 10; k++) {
//         $('.allnewss li:nth-child(' + k + ')').addClass('newsshow')
//       }
//     } else {
//       for (var k = num * 10 - 9; k < num * 10 + 1; k++) {
//         $('.allnewss li:nth-child(' + k + ')').addClass('newsshow')
//       }
//     }
//
//     document.documentElement.scrollTop = document.body.scrollTop = 0;
//   }
// })


// $('.allnewss li').addClass('newshide');
// for (var k = 1; k < 11; k++) {
//   $('.allnewss li:nth-child(' + k + ')').addClass('newsshow')
// }

$("#page1").paging({
  pageNo: 1,
  totalPage: 3,
  callback: function(num) {

    $.ajax({
      url: '/news/all',
      method: 'post',
      data: {value: num}
    }).done(function(data, status, jqXHR){
      $(".allnews li").empty();
      data.forEach(function(cur, index) {
        $('.allnews').prepend(`<li><a href="/news/${cur.idx}"><h4 class="h4" style="color: #000;">${cur.title}</h4></a>
        <p style="font-size:14px;">${cur.time}</p>
        <p class="h4" style="color: #6F6F6F; font-size:15px;">&nbsp;&nbsp;${cur.content}</p>
        <p class="h5"><a href="/news/${cur.idx}" style="color: #c2502e;">Read more →</a></p>
        </li>`)
      })
    });

    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
})

//媒体报道

$('.newsmedia li').addClass('newshide');
for (var m = 1; m < 11; m++) {
  $('.newsmedia li:nth-child(' + m + ')').addClass('newsshow')
}
$("#page2").paging({
  pageNo: 1,
  totalPage: 7,

  callback: function(num) {
    console.log(num);
    $('.newsmedia li').addClass('newshide')
    $('.newsmedia li').removeClass('newsshow')
    if (num == 1) {
      for (var m = num; m < num + 10; m++) {
        $('.newsmedia li:nth-child(' + m + ')').addClass('newsshow')
      }
    } else {
      for (var m = num * 10 - 9; m < num * 10 + 1; m++) {
        $('.newsmedia li:nth-child(' + m + ')').addClass('newsshow')
      }
    }

    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
})

//微金所头条

$('.wjs-news-top li').addClass('newshide');
for (var m = 1; m < 11; m++) {
  $('.wjs-news-top li:nth-child(' + m + ')').addClass('newsshow')
}
$("#page3").paging({
  pageNo: 1,
  totalPage: 7,

  callback: function(num) {
    console.log(num);
    $('.wjs-news-top li').addClass('newshide')
    $('.wjs-news-top li').removeClass('newsshow')
    if (num == 1) {
      for (var m = num; m < num + 10; m++) {
        $('.wjs-news-top li:nth-child(' + m + ')').addClass('newsshow')
      }
    } else {
      for (var m = num * 10 - 9; m < num * 10 + 1; m++) {
        $('.wjs-news-top li:nth-child(' + m + ')').addClass('newsshow')
      }
    }

    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
})

//行业资讯

$('.newsjob li').addClass('newshide');
for (var m = 1; m < 11; m++) {
  $('.newsjob li:nth-child(' + m + ')').addClass('newsshow')
}
$("#page4").paging({
  pageNo: 1,
  totalPage: 7,

  callback: function(num) {

    $('.newsjob li').addClass('newshide')
    $('.newsjob li').removeClass('newsshow')
    if (num == 1) {
      for (var m = num; m < num + 10; m++) {
        $('.newsjob li:nth-child(' + m + ')').addClass('newsshow')
      }
    } else {
      for (var m = num * 10 - 9; m < num * 10 + 1; m++) {
        $('.newsjob li:nth-child(' + m + ')').addClass('newsshow')
      }
    }

    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
})
