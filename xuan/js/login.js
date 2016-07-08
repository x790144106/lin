$(function(){
    $("#login").click(function(event){
        event.stopPropagation();
        var User=$("#user").val();
        var Pass=$("#pass").val();
        // var Pass=her_md5($("#pass").val());
        if(User=="123456789"&&Pass=="111111"){
            window.location.href = "index.html";
        }else{
            alert("用户名未注册或密码错误");  
        };
        
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
        window.location.href="registered.html";
    });
    $(".forget_password").click(function(){
        window.location.href="password.html";
    });
});
