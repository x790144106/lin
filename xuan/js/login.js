$(function(){

    var user=sessionStorage.getItem("user");
    if (user) {$("#user").val(user);};

    $("#login").click(function(event){
        event.stopPropagation();
        var User=$("#user").val();
        var Pass=$("#pass").val();
        // var Pass=her_md5($("#pass").val());
        // var cc=(User=="123456789"&&Pass=="111111")
        if(User==""||Pass==""){
            alert("用户名或密码不能为空")
        }else{
            if(User=="18767120504"&&Pass=="111111"){
                sessionStorage.setItem("user",User);
                window.location.href = "index.html";
            }else{
                alert("用户名未注册或密码错误");
            };
        }

        $.get("http://30d3f976.ngrok.natapp.cn/" + new Date().getTime(), function(data){ 
        $(".cs_dl").html(data);
        // var dataObj=eval('('+data+')');//转换为json对象
        // $("#id").html("编号："+dataObj.id);
        // $("#name").html("姓名："+dataObj.name);
        // $("#arg").html("年龄："+dataObj.arg);

        // $("span").html(dataObj.remark);

//alert("Data Loaded: "+new Date().getTime()); 
        });
        
        
        // if (User!=""&&Pass!="") {
        //     $.ajax({
        //         url:"#",
        //         type:"POST",
        //         data:{phone:User,password:Pass},
        //         datatype:json,
        //         contenttype:"application/json;charset=UTF-8",
        //         success:function(data){
        //             if (data.code==101) {
        //                 alert("用户名未注册或密码错误");
        //             }else{
        //                 console.log(data.message);
        //                 window.location.href = "index.html";
        //             };  
        //         }
        //     });
        // };

    });
    $(".register").click(function(){
        var storage=sessionStorage;
        storage.setItem("user",$("#user").val());
        window.location.href="registered.html";
    });
    $(".forget_password").click(function(){
        var storage=sessionStorage;
        storage.setItem("user",$("#user").val());
        window.location.href="password.html";
    });
});
