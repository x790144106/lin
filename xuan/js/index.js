$(function(){
    var user=sessionStorage.getItem("user");
    if (user) {
        $(".U").html("<a href='#'>"+user+"</a>");
    }else{$(".U").html("<a href='#'>未登入</a>")};
    
    $(".ck_select").change(function(){
        var json={
            "w01":{"仓库号":"W01","仓库名":"铁芯仓库","管理员":"温丽燕","联系方法":"无"},
            "w02":{"仓库号":"W02","仓库名":"冲片仓库","管理员":"张丽英","联系方法":"无"},
            "w03":{"仓库号":"W03","仓库名":"成品仓库","管理员":"胡星炯","联系方法":"13429526718"},
            "w04":{"仓库号":"W04","仓库名":"辅料仓库","管理员":"韩林利","联系方法":"13735232080"}
        }
        var select=$(".ck_select").val();
        // alert(select);
        for(key in json){
            // alert(key);
            if (select==key) {
                // alert(json[key].仓库号);
                // $(".zy_table").html("11111111");
                $(".zy_table").html(
                        "<div class='ck_c'><ul>"+
                                "<div><li>"+"仓库号"+":"+json[key].仓库号+"</li></div>"+
                                "<div><li>"+"仓库名"+":"+json[key].仓库名+"</li></div>"+
                                "<div><li>"+"管理员"+":"+json[key].管理员+"</li></div>"+
                                "<div><li>"+"联系方法"+":"+json[key].联系方法+"</li></div>"+
                            "</ul></div>"
                    );
            };
        }
    });
    
});