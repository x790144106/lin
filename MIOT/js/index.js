$(function(){
    $('#nav ul li').click(function(){
        // alert("");
        $('#nav ul li[class="active"]').removeClass("active");
        $(this).addClass("active");
    });
});