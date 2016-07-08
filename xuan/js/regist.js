$(function(){
    var getCaptcha=$("#getCaptcha");
    // $("#phoneNum").attr("disabled",true);
    
    getCaptcha.bind("click",function(){
        var phoneNum=$("#phoneNum").val(); 
        // alert(phoneNum);
        if (!checkMobile(phoneNum)) {
           alert("请填写正确的手机号码") 
        }else{
            // getCaptcha.attr("disabled", true);
            var i=60;
            var timer=setInterval(function(){
                if(i!=0){
                    i--;
                    getCaptcha.html(i+'s后重新获取');
                    // getCaptcha.attr("disabled", true);
                    getCaptcha.css("background","#808080");
                    getCaptcha.unbind("click")
                }else{
                    clearInterval(timer);
                    getCaptcha.html('重新获取');
                    getCaptcha.removeAttr('disabled');
                    getCaptcha.css("background","#af904a");
                    getCaptcha.bind("click",function(){
                        var phoneNum=$("#phoneNum").val(); 
        // alert(phoneNum);
        if (!checkMobile(phoneNum)) {
           alert("请填写正确的手机号码") 
        }else{
            // getCaptcha.attr("disabled", true);
            var i=60;
            var timer=setInterval(function(){
                if(i!=0){
                    i--;
                    getCaptcha.html(i+'s后重新获取');
                    // getCaptcha.attr("disabled", true);
                    getCaptcha.css("background","#808080");
                    getCaptcha.unbind("click")
                }else{
                    clearInterval(timer);
                    getCaptcha.html('重新获取');
                    getCaptcha.removeAttr('disabled');
                    getCaptcha.css("background","#af904a");
                    getCaptcha.bind("click",function(){
                        getYzm();
                    });
                }
            },1000);
        };
                    });
                }
            },1000);
        };
    });
    $("#gb_but").click(function(){
        window.location.href="login.html";
    });
});
function checkMobile(str) {
    var re = /^[1][35847][0-9]{9}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}
