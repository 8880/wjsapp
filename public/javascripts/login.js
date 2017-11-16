$("#btn").click(function(){
  var um = $('#um').val();
  var pw = $("#pw").val();

  if (um == '' || pw == '') {
    alert("账号密码不能为空!!!")
  } else {
    $.ajax({
      url: '/login/dl',
      method: 'post',
      data: {
        um: um,
        pw: pw
      }
    }).done(function(data, status, jqXHR){
      if (data.value == 1) {
        location.href = '/userin'
      } else {
        alert("用户名或密码不符!!!")
        $('#um').val('');
        $("#pw").val('');
      }
    })
  }
})
