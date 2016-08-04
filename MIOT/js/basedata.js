$(function(){
    //部门设置
    $("#dept-m div").hide();
    $("#dept-m h2").click(function(){
        if ($("#dept-m h2 label").text()=='+') {
            $("#dept-m h2 label").html('-&nbsp;');
        }else{
            $("#dept-m h2 label").text('+');
        }
        $("#dept-m div").toggle();
        // $("#dept-m #ws").toggle()
        $(".small-nav").html('<a href="basedata.html">基础数据</a><span>&gt;</span><span>部门设置</span>');    
    });
    $("#dept-m #ws").hide();
    $("#dept-m #cj").click(function(){

        $("#content .box-head .left").text('部门');
        $("#content .box-head .right label").text('部门ID');
        $('#add').text($(this).text());
        if ($("#dept-m #cj label").text()=='+') {
                $("#dept-m #cj label").html('-');
            }else{
                $("#dept-m #cj label").text('+');
            }
        $("#dept-m #ws").toggle()
        // alert($(this).text());
        // var flag=$(this).text().substring(1,3);
        // alert(flag);
        // switch(flag){
        //     case "车间":
        //         if ($("#dept-m #cj label").text()=='+') {
        //             $("#dept-m #cj label").html('-');
        //         }else{
        //             $("#dept-m #cj label").text('+');
        //          }
        //         $("#dept-m #ws").toggle();
        //         break;
        //     case "班组":
        //         if ($("#dept-m #bz label").text()=='+') {
        //             $("#dept-m #bz label").html('-');
        //         }else{
        //             $("#dept-m #bz label").text('+');
        //          }
        //         $("#dept-m #wg").toggle();
        //         break;
        //     case "仓库":
        //         if ($("#dept-m #ck label").text()=='+') {
        //             $("#dept-m #ck label").html('-');
        //         }else{
        //             $("#dept-m #ck label").text('+');
        //          }
        //         $("#dept-m #ss").toggle();
        //         break;    
        // }
        $.ajax({
            url:'php/basedata.php',
            type:'post',
            dataType:'json',
            // data:"&username="+User,
            success:function(data){
                var rowdata=data.wsname;
                var n = data.i;
                // alert(rowdata[0]);
                // alert(data.username);

                // $html.empty();
                $('#dept-m #ws').empty();
                // $("<li></li>").html('<h3>'+$(this).text()+'</h3>').appendTo($(this).parent().next());
                if (rowdata.length) {
                    // $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);
                        $("<li></li>").text(tem).appendTo($('#dept-m #ws')).click(function(){
                            $("#content .box-head .left").text('车间');
                            $("#content .box-head .right label").text('车间ID');
                            $('#add').text("车间详情");
                            var wsname=$(this).text();
                            $("li[class='selected']").removeClass('selected');
                            $(this).addClass("selected");

                            // $(".table table").empty();
                            // alert(orderid);
                            $.ajax({
                                type:"POST",
                                url:"php/basedata1.php",
                                dataType:"json",
                                data:"wsname="+wsname,
                                success:function(data){
                                    // alert(data.order[]);
                                    var str='';
                                    var cname=['车间编号','所属部门','编码','车间名称','地址','负责人','联系电话' ,'备注']
                                    var ws=data.ws;
                                    $(".table table").empty();
                                    // $("<tr></tr>").html("str").appendTo($(".table table")) ;
                                    for (var i=0, len= ws.length; i < len; i++) {
                                        if (ws[i]==null) {ws[i]='无';};
                                        str+='<td>'+cname[i]+':'+ws[i]+'</td>';
                                        if ((i+1)%2==0) {
                                           $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                           // alert("1111");
                                           str='';
                                        };
                                        if (i==len-1) {
                                            $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                           // alert("1111");
                                           str='';
                                       };
                                    };
                                    // var tr1=订单ID 客户订单ID 客户编号 业务员 部门ID 支付方式 支付时间 
                                    //     递送方式 递送费用 结算货币 创建人 创建时间 审核人 审核时间 备注
                                    // alert(data.code);
                                }
                            })
                        });
                    })
                    // $html.show();
                };
            }
        })
    });
    // $("#dept-m div").hide();
    // $("#dept-m h2").click(function(){
    //     if ($("#dept-m h2 label").text()=='+') {
    //         $("#dept-m h2 label").html('-&nbsp;');
    //     }else{
    //         $("#dept-m h2 label").text('+');
    //     }
    //     $("#dept-m div").toggle();
    //     // $("#dept-m #ws").toggle()
    //     $(".small-nav").html('<a href="basedata.html">基础数据</a><span>&gt;</span><span>部门设置</span>');    
    // });
    $("#dept-m #wg").hide();
    $("#dept-m #bz").click(function(){

        $("#content .box-head .left").text('部门');
        $("#content .box-head .right label").text('部门ID');
        $('#add').text($(this).text());
        if ($("#dept-m #bz label").text()=='+') {
                $("#dept-m #bz label").html('-');
            }else{
                $("#dept-m #bz label").text('+');
            }
        $("#dept-m #wg").toggle()
        
        $.ajax({
            url:'php/basedata.php',
            type:'post',
            dataType:'json',
            // data:"&username="+User,
            success:function(data){
                var rowdata=data.groupname;
                var n = data.i;
                // alert(rowdata[0]);
                // alert(data.username);

                // $html.empty();
                $('#dept-m #wg').empty();
                // $("<li></li>").html('<h3>'+$(this).text()+'</h3>').appendTo($(this).parent().next());
                if (rowdata.length) {
                    // $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);
                        $("<li></li>").text(tem).appendTo($('#dept-m #wg')).click(function(){
                            $("#content .box-head .left").text('班组');
                            $("#content .box-head .right label").text('班组ID');
                            $('#add').text("班组详情");
                            var groupname=$(this).text();
                            $("li[class='selected']").removeClass('selected');
                            $(this).addClass("selected");

                            // $(".table table").empty();
                            // alert(orderid);
                            $.ajax({
                                type:"POST",
                                url:"php/basedata1.php",
                                dataType:"json",
                                data:"groupname="+groupname,
                                success:function(data){
                                    // alert(data.order[]);
                                    var str='';
                                    var cname=['班组编号','班组名称','负责人','所属部门','所属车间','地址','联系电话' 
                                        ,'备注']
                                    var ws=data.wg;
                                    $(".table table").empty();
                                    // $("<tr></tr>").html("str").appendTo($(".table table")) ;
                                    for (var i=0, len= ws.length; i < len; i++) {
                                        if (ws[i]==null) {ws[i]='无';};
                                        str+='<td>'+cname[i]+':'+ws[i]+'</td>';
                                        if ((i+1)%3==0) {
                                           $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                           // alert("1111");
                                           str='';
                                        };
                                        if (i==len-1) {
                                            $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                           // alert("1111");
                                           str='';
                                       }
                                    };   
                                }
                            })
                        });
                    })
                };
            }
        })
    });
    $("#dept-m #ss").hide();
    $("#dept-m #ck").click(function(){

        $("#content .box-head .left").text('部门');
        $("#content .box-head .right label").text('部门ID');
        $('#add').text($(this).text());
        if ($("#dept-m #ck label").text()=='+') {
                $("#dept-m #ck label").html('-');
            }else{
                $("#dept-m #ck label").text('+');
            }
        $("#dept-m #ss").toggle()
        
        $.ajax({
            url:'php/basedata.php',
            type:'post',
            dataType:'json',
            // data:"&username="+User,
            success:function(data){
                var rowdata=data.whname;
                var n = data.i;
                // alert(rowdata[0]);
                // alert(data.username);

                // $html.empty();
                $('#dept-m #ss').empty();
                // $("<li></li>").html('<h3>'+$(this).text()+'</h3>').appendTo($(this).parent().next());
                if (rowdata.length) {
                    // $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);
                        $("<li></li>").text(tem).appendTo($('#dept-m #ss')).click(function(){
                            $("#content .box-head .left").text('仓库');
                            $("#content .box-head .right label").text('仓库ID');
                            $('#add').text("仓库详情");
                            var whname=$(this).text();
                            $("li[class='selected']").removeClass('selected');
                            $(this).addClass("selected");

                            // $(".table table").empty();
                            // alert(orderid);
                            $.ajax({
                                type:"POST",
                                url:"php/basedata1.php",
                                dataType:"json",
                                data:"whname="+whname,
                                success:function(data){
                                    // alert(data.order[]);
                                    var str='';
                                    var cname=['班组编号','班组名称','负责人','所属部门','所属车间','地址','联系电话' 
                                        ,'备注']
                                    var ws=data.ss;
                                    $(".table table").empty();
                                    // $("<tr></tr>").html("str").appendTo($(".table table")) ;
                                    for (var i=0, len= ws.length; i < len-2; i++) {
                                        if (ws[i]==null) {ws[i]='无';};
                                        str+='<td>'+cname[i]+':'+ws[i]+'</td>';
                                        if ((i+1)%2==0) {
                                           $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                           // alert("1111");
                                           str='';
                                        };
                                       //  if (i==len-1) {
                                       //      $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                       //     // alert("1111");
                                       //     str='';
                                       // }
                                    };   
                                }
                            })
                        });
                    })
                };
            }
        })
    });
    $("#user-m div").hide();
    $("#user-m h2").click(function(){
        if ($("#user-m h2 label").text()=='+') {
            $("#user-m h2 label").html('-&nbsp;');
        }else{
            $("#user-m h2 label").text('+');
        }
        $("#user-m div").toggle();
        // $("#dept-m #ws").toggle()
        $(".small-nav").html('<a href="basedata.html">基础数据</a><span>&gt;</span><span>用户管理</span>');    
    });
    $("#permission-m div").hide();
    $("#permission-m h2").click(function(){
        if ($("#permission-m h2 label").text()=='+') {
            $("#permission-m h2 label").html('-&nbsp;');
        }else{
            $("#permission-m h2 label").text('+');
        }
        $("#permission-m div").toggle();
        // $("#dept-m #ws").toggle()
        $(".small-nav").html('<a href="basedata.html">基础数据</a><span>&gt;</span><span>权限管理/span>');    
    });


    $("#user-m #un").hide();
    $("#user-m #yhm").click(function(){

        $("#content .box-head .left").text('用户管理');
        $("#content .box-head .right label").text('用户ID');
        $('#add').text($(this).text());
        if ($("#user-m #yhm label").text()=='+') {
                $("#user-m #yhm label").html('-');
            }else{
                $("#user-m #yhm label").text('+');
            }
        $("#user-m #un").toggle()
        
        $.ajax({
            url:'php/basedata.php',
            type:'post',
            dataType:'json',
            // data:"&username="+User,
            success:function(data){
                var rowdata=data.name;
                var n = data.i;
                // alert(rowdata[0]);
                // alert(data.username);

                // $html.empty();
                $('#user-m #un').empty();
                // $("<li></li>").html('<h3>'+$(this).text()+'</h3>').appendTo($(this).parent().next());
                if (rowdata.length) {
                    // $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);
                        $("<li></li>").text(tem).appendTo($('#user-m #un')).click(function(){
                            $("#content .box-head .left").text('用户');
                            $("#content .box-head .right label").text('用户D');
                            $('#add').text("用户详情");
                            var name=$(this).text();
                            $("li[class='selected']").removeClass('selected');
                            $(this).addClass("selected");

                            // $(".table table").empty();
                            // alert(orderid);
                            $.ajax({
                                type:"POST",
                                url:"php/basedata1.php",
                                dataType:"json",
                                data:"name="+name,
                                success:function(data){
                                    // alert(data.order[]);
                                    var str='';
                                    var cname=['编号','简称','密码','用户名','员工Id','权限组Id']
                                    var ws=data.user;
                                    $(".table table").empty();
                                    // $("<tr></tr>").html("str").appendTo($(".table table")) ;
                                    for (var i=0, len= ws.length; i < len; i++) {
                                        if (ws[i]==null) {ws[i]='无';};
                                        str+='<td>'+cname[i]+':'+ws[i]+'</td>';
                                        if ((i+1)%2==0) {
                                           $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                           // alert("1111");
                                           str='';
                                        };
                                       //  if (i==len-1) {
                                       //      $("<tr></tr>").html(str).appendTo($(".table table")) ;
                                       //     // alert("1111");
                                       //     str='';
                                       // }
                                    };   
                                }
                            })
                        });
                    })
                };
            }
        })
    });
});