$(function(){
    var user=sessionStorage.getItem("user");
    if (user) {$(".U").html(user);};
    
});