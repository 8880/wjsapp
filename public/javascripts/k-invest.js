//产品期限
$('.condition table tr:eq(0)').click(function(e){
  $('.condition table tr:eq(0) button').removeClass('on');
  $(e.target).addClass('on');
})
//产品收益
$('.condition table tr:eq(1)').click(function(e){
  $('.condition table tr:eq(1) button').removeClass('on');
  $(e.target).addClass('on');
})
//产品类型
$('.condition table tr:eq(2)').click(function(e){
  $('.condition table tr:eq(2) button').removeClass('on');
  $(e.target).addClass('on');
})
//排序
$('.k-sort').click(function(e){
  // console.log($(e.target));
  // console.log($('.k-sort on'));
  $(e.target).siblings().removeClass('on');
  $(e.target).addClass('on');
})
for (let i = 1; i < 6; i++) {
  $('.k-sort li:nth-of-type('+i+')').click(function(e){
    if($(this).children().hasClass('fa-arrow-down')){
      $(this).children().removeClass('fa-arrow-down');
      $(this).children().addClass('fa-arrow-up');
    }else{
      $(this).children().removeClass('fa-arrow-up');
      $(this).children().addClass('fa-arrow-down');
    }
  })
}
//FENYE
// $("#page").paging({
// 			pageNo:1,
// 			totalPage: 9,
// 			totalSize: 300,
// 			callback: function(num) {
//
// 			}
// 		})


//模态框
    function centerModals() {
    　　$('#myModal').each(function(i) {
    　　　　var $clone = $(this).clone().css('display','block').appendTo('body');
    　　　　var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    　　　　top = top > 0 ? top : 0;
    　　　　$clone.remove();
    　　　　$(this).find('.modal-content').css("margin-top", top);
    　　});
    };

    $('#myModal').on('show.bs.modal', centerModals);
    //禁用空白处点击关闭
    $('#myModal').modal({
    backdrop: 'static',
    keyboard: false,//禁止键盘
    show:false
    });
    //页面大小变化是仍然保证模态框水平垂直居中
    $(window).on('resize', centerModals);




//无

//计算器
$('#computed').click(function(){
  var y = parseInt($('#investYield').val());
  var x = parseInt($('#investSum').val());
  var z = parseInt($('#investDate').val());
  $('.lx-result').text(x*((y/1200)*z));
  $('.bx-result').text(x*((y/1200)*z) + x);
})
$('#reload').click(function(){
  $('#investYield').val('');
  $('#investSum').val('');
  $('#investDate').val('');
  $('.lx-result').text('');
  $('.bx-result').text('');
})


var result;
function update(data){
  $('.k-result').empty();
  for(var i = 0; i < data.length;i++){
    $(`<hr>

      <div class="investItem clearfix">
        <h4><a href="/loan/${data[i]['id']}">${ data[i]['title'] }</a></h4>
        <div class="first">
          <span class="rate">${ data[i]['yield'] }</span><sub>%</sub>
          <p>测算年化收益率</p>
        </div>
        <div class="secondUp">
          <p>借款期限:<strong>${ data[i]['date'] }</strong>${ data[i]['date_unit'] } </p>
          <p>
            还款方式：<span>${ data[i]['repayment'] }</span>
          </p>
        </div>
        <div class="second">
          <p>筹集金额：<span>${ data[i]['sum'] }万</span></p>
          产品星级：
          <div class="star">
            <div class="gray-star">

            </div>
            <div class="active-star" style='width:${ data[i]['star'] }px'>

            </div>
          </div>
        </div>
        <div class="second">
          <p>投资进度：<span>${ parseInt((data[i]['sum']*10000-data[i]['blance'])/(data[i]['sum']*10000)*100) }%</span><span class="progress"><span class="progress-bar" style="width:${ parseInt((data[i]['sum']*10000-data[i]['blance'])/(data[i]['sum']*10000)*100) }px"></span></span></p>
          <p>可投金额：<span>${ data[i]['blance'] }元</span></p>
        </div>
        <div class="third">
          <a href="/loan/${data[i]['id']}">
            <span class="join">立即加入</span>
          </a>
        </div>
      </div>`
).appendTo('.k-result');
  }

}
//类别

$.ajax({
  method:'post',
  url:'/loan/getlist',
  data:{value:$('#category .on').val(),date:$('#date .on').val(),yield:$('#yield .on').val()
  }
}).done(function(data){
    result = data;
    var item;
    $("#page").paging({
    			pageNo:1,
    			totalPage: Math.ceil(data.length/10),
    			totalSize: data.length,
    			callback: function(num) {
            item = data.slice((num-1)*10,num*10);
            console.log(item);
            update(item);
    			}
    		})
    item=data.slice(0,10);
    update(item);
})

$('#category').click(function(e){
  if($(e.target).val()){
  $.ajax({
    method:'post',
    url:'/loan/getlist',
    data:{value:$(e.target).val(),date:$('#date .on').val(),yield:$('#yield .on').val()
    }
  }).done(function(data){
      result = data;
      var item;
      $("#page").paging({
      			pageNo:1,
      			totalPage: Math.ceil(data.length/10),
      			totalSize: data.length,
      			callback: function(num) {
              item = data.slice((num-1)*10,num*10);
              console.log(item);
              update(item);
      			}
      		})
      item=data.slice(0,10);
      update(item);
  })
}
})

//利率
$('#yield').click(function(e){
  if($(e.target).val()){
  $.ajax({
    method:'post',
    url:'/loan/getlist',
    data:{yield:$(e.target).val(),date:$('#date .on').val(),value:$('#category .on').val()}
  }).done(function(data){
    result = data;
    var item;
    $("#page").paging({
    			pageNo:1,
    			totalPage: Math.ceil(data.length/10),
    			totalSize: data.length,
    			callback: function(num) {
            item = data.slice((num-1)*10,num*10);
            console.log(item);
            update(item);
    			}
    		})
    item=data.slice(0,10);
    update(item);
  })
}
})

//日期
$('#date').click(function(e){
  if($(e.target).val()){
  $.ajax({
    method:'post',
    url:'/loan/getlist',
    data:{date:$(e.target).val(),value:$('#category .on').val(),yield:$('#yield .on').val()}
  }).done(function(data){
    result = data;
    var item;
    $("#page").paging({
    			pageNo:1,
    			totalPage: Math.ceil(data.length/10),
    			totalSize: data.length,
    			callback: function(num) {
            item = data.slice((num-1)*10,num*10);
            console.log(item);
            update(item);
    			}
    		})
    item=data.slice(0,10);
    update(item);
  })
}
})

function pag(data){
  $("#page").paging({
        pageNo:1,
        totalPage: Math.ceil(data.length/10),
        totalSize: data.length,
        callback: function(num) {
          item = data.slice((num-1)*10,num*10);
          console.log(item);
          update(item);
        }
      })
  item=data.slice(0,10);
  update(item);
}

$('.k-sort').click(function(e){
  var data = result.slice(0);
  var item;
  if($('.k-sort .on').val() == 1){
    pag(result);
  }else if($('.k-sort .on').val() == 2){
    console.log(22);
    if($('.k-sort .on').children().hasClass('fa-arrow-up')){
      data.sort(function(a,b){
        return a['yield'] - b['yield'];
      })
      pag(data);
    }else{
      data.sort(function(a,b){
        return b['yield'] - a['yield'];
      })
      pag(data);
    }
  }else if($('.k-sort .on').val() == 3){
    console.log(33);
    if($('.k-sort .on').children().hasClass('fa-arrow-up')){
      data.sort(function(a,b){
        if(a['date_unit'] == '月'){
          var x = a['date']*30;
        }else{
          var x = a['date'];
        }
        if(b['date_unit'] == '月'){
          var y = b['date']*30;
        }else{
          var y = b['date'];
        }
        return x - y;
      })
      pag(data);;
    }else{
      data.sort(function(a,b){
        if(a['date_unit'] == '月'){
          var x = a['date']*30;
        }else{
          var x = a['date'];
        }
        if(b['date_unit'] == '月'){
          var y = b['date']*30;
        }else{
          var y = b['date'];
        }
        return y - x;
      })
      pag(data);
    }
  }else if($('.k-sort .on').val() == 4){
    console.log(44);
    if($('.k-sort .on').children().hasClass('fa-arrow-up')){
      data.sort(function(a,b){
        return a['title'] - b['title'];
      })
      pag(data);
    }else{
      data.sort(function(a,b){
        return b['title'] - a['title'];
      })
      pag(data);
    }
  }else if($('.k-sort .on').val() == 5){
    console.log(55);
    if($('.k-sort .on').children().hasClass('fa-arrow-up')){
      data.sort(function(a,b){
        return a['star'] - b['star'];
      })
      pag(data);
    }else{
      data.sort(function(a,b){
        return b['star'] - a['star'];
      })
      pag(data);
    }
  }

})
