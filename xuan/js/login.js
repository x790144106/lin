$(function(){
    var his=window.location.search.split("=")[1];
    $(".register").click(function(){
        window.location.href="registered.html?his="+his;
    });
    $(".forget_password").click(function(){
        window.location.href="password.html?his="+his;
    });
});
