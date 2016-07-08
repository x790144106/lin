$(function(){
    var his = window.location.search.split("=")[1]?window.location.search.split("=")[1]:"index.html";
    $("#gb_but").click(function(){
        window.location.href="login.html?his="+his;
    });
});