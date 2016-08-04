$(function(){
    var host = window.location.host;
    // alert(host);
    //获得匹配的用户名
    var $html = $("<ul class='autocomplete'></ul>").hide().insertAfter("#userN");//定义一个html标签,用来隐藏插入到文本框下面
    $('#userN').bind('input propertychange',function(){
        var User=$('#userN').val();
        // alert(User);
        $.ajax({
            url:'php/login1.php',
            type:'post',
            dataType:'json',
            data:"&username="+User,
            success:function(data){
                var rowdata=data.row;
                // alert(data.row);
                // alert(data.username);

                $html.empty();
                if (rowdata.length) {
                    $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);
                        $("<li></li>").text(tem).appendTo($(".autocomplete")).mouseover(function(){
                            $(this).css("background", "green");
                        }).mouseout(function(){
                            $(this).css("background", "#fff");
                        }).click(function(){
                            $('#userN').val(tem);
                            $(".autocomplete").hide();
                        })
                    })
                    $html.show();
                };
            }
        });
    });
    //登入验证
    $('#login_b').click(function(){
        var UN=$('#userN').val();
        var UP=hex_md5($('#userP').val());
        // alert(UP);
        // alert(UN+UP);
        if (UN!=""&&UP!="") {
            $.ajax({
                type:"POST",
                url:"php/login2.php",
                dataType:"json",
                data:"username="+UN+"&password="+UP,
                success:function(data){
                    // alert(data.code+data.password+data.user+data.pass);
                    // alert(data.password);
                    if (data.code==101) {
                        alert("用户名未注册或密码错误");
                        $("#user").val(""),
                        $("#pass").val("");
                    }else{
                        $.cookie('username_cookie', UN, { expires: 7, path: '/MIOT/', domain: host}); // 存储一个带7天期限的 cookie 
                        
                        window.location.href = "index.html";
                        
                    }
                    // console.log()
                     
                }
            })
        };

    });
   $('#regist').click(function(){
        var account= $.cookie('username_cookie'); 
        alert(account);
   }) 

});
