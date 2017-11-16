$("#btn").click(function(){

  var username = $("#username").val();
  var pwd = $("#pwd").val();
  var qrpwd = $("#qrpwd").val();
  var tpyz = $("#tpyz").val();
  var vip = $("#vip").val();
  var ss = $('input:radio[name="sex"]:checked').val();

  console.log(ss);
  if (username == '' || pwd == '' || qrpwd == '' || tpyz == '' || vip == '') {
      alert('信息不能为空!!!')
  } else if (pwd != qrpwd) {
    alert('两次密码不一致');
    $("#pwd").val('');
    $("#qrpwd").val('');
  } else if (tpyz != 5717) {
    alert('验证码不正确');
    $("#tpyz").val('')
  } else if (vip != 74141683110466616262321261995053017663080530) {
    alert('VIP邀请码不存在!!!');
    $("#vip").val('');
  } else if (ss == undefined ) {
    alert('请阅读并同意微金所《服务协议》')
  } else {

    $.ajax({
      url: '/register/sigin',
      method: 'post',
      data: {
        sguser: username,
        sgpaswd: pwd
      }
    }).done(function(data, status, jqXHR){
        alert('注册成功!!!!');
        location.href = '/login';
    })
  }


})
