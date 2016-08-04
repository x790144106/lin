$(function(){
    $("#client-m ul").hide();
    $("#order-m ul").hide();
    // $("#client-m h2").toggle(
    //     function(){
    //         $("#client-m h2 span").text("-") ;
    //         $("#client-m ul").toggle();
    //         $(".small-nav").html('<a href="client.html">客户关系</a><span>&gt;</span><span>客户管理</span>'); 
    //     },function(){
    //         $("#client-m h2 span").text("+") ;
    //         $("#client-m ul").toggle();
    //         $(".small-nav").html('<a href="client.html">客户关系</a><span>&gt;</span><span>客户管理</span>'); 
    //     }
    // );
    $("#client-m h2").click(function(){
        if ($("#client-m h2 label").text()=='+') {
            $("#client-m h2 label").html('-&nbsp;');
        }else{
            $("#client-m h2 label").text('+');
        }
        $("#client-m ul").toggle();
        $(".small-nav").html('<a href="client.html">客户关系</a><span>&gt;</span><span>客户管理</span>');    
    });
    $("#order-m h2").click(function(){
        if ($("#order-m h2 label").text()=='+') {
            $("#order-m h2 label").html('-&nbsp;');
        }else{
            $("#order-m h2 label").text('+');
        }
        $("#order-m ul").toggle();
        $(".small-nav").html('<a href="client.html">客户关系</a><span>&gt;</span><span>订单管理</span>');
    });
    $("#order-m h2").click(function(){

        $("#content .box-head .left").text('订单');
        $("#content .box-head .right label").text('订单ID');
        $('#add').text("订单详情");
        $.ajax({
            url:'php/client.php',
            type:'post',
            dataType:'json',
            // data:"&username="+User,
            success:function(data){
                var rowdata=data.orderid;
                var n = data.i;
                // alert(data.i);
                // alert(data.username);

                // $html.empty();
                $("#order-m ul").empty();
                $("<li></li>").html('<h3>订单ID</h3>').appendTo($("#order-m ul"));
                if (rowdata.length) {
                    // $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);
                        $("<li></li>").text(tem).appendTo($("#order-m ul")).click(function(){
                            $("#content .box-head .left").text('订单');
                            $("#content .box-head .right label").text('订单ID');
                            $('#add').text("订单详情");
                            var orderId=$(this).text();
                            $("li[class='selected']").removeClass('selected');
                            $(this).addClass("selected");

                            // $(".table table").empty();
                            // alert(orderid);
                            $.ajax({
                                type:"POST",
                                url:"php/client1.php",
                                dataType:"json",
                                data:"orderid="+orderId,
                                success:function(data){
                                    // alert(data.order[]);
                                    var str='';
                                    var cname=['订单ID','客户订单ID','客户编号','业务员','部门ID','支付方式','支付时间' 
                                        ,'递送方式','递送费用','结算货币','创建人','创建时间','审核人','审核时间','备注']
                                    var order=data.order;
                                    $(".table table").empty();
                                    // $("<tr></tr>").html("str").appendTo($(".table table")) ;
                                    for (var i=0, len= order.length; i < len-1; i++) {
                                        if (order[i]==null) {order[i]='无';};
                                        str+='<td>'+cname[i]+':'+order[i]+'</td>';
                                        if ((i+1)%3==0) {
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
                                    if (data.code) {
                                        var thss=['订单ID','订单列表ID','物料编码','订单数量','交货日期'];
                                        var tds='';
                                        var ths='';
                                        var orderlist=data.orderlist;
                                        // alert(orderlist[1].length);
                                    // $("<tr></tr>").tet订单ID,订单列表ID，物料编码，订单数量，交货日期
                                        $("#XY").empty();
                                        $('<table width="100%" border="0" cellspacing="0" cellpadding="0"></table>').appendTo("#XY");
                                        
                                        for(var i=0, len= thss.length; i < len; i++){
                                            ths+='<th>'+thss[i]+'</th>';
                                            }
                                        $("<tr></tr>").html(ths).appendTo($("#XY table"));
                                        for (var i=0, len= orderlist.length; i < len; i++) {
                                            for(var n=0,len1=orderlist[1].length;n<len1;n++){
                                                if (orderlist[i][n]==null) {orderlist[i][n]='无';};
                                                tds+='<td>'+orderlist[i][n]+'</td>';

                                            }
                                            $("<tr></tr>").html(tds).appendTo($("#XY table"));
                                            tds='';
                                        };
                                    }else{
                                        var thss=['订单ID','订单列表ID','物料编码','订单数量','交货日期'];
                                        // var tds='';
                                        var ths='';
                                        $("#XY").empty();
                                        $('<table width="100%" border="0" cellspacing="0" cellpadding="0"></table>').appendTo("#XY");
                                        
                                        for(var i=0, len= thss.length; i < len; i++){
                                            ths+='<th>'+thss[i]+'</th>';
                                            }
                                        $("<tr></tr>").html(ths).appendTo($("#XY table"));

                                    }
                                }
                            })
                        });
                    })
                    // $html.show();
                };
            }
        })
    });
    $("#client-m h2").click(function(){

        $("#content .box-head .left").text('客户详情');
        $("#content .box-head .right label").text('客户ID/客户名称');
        // $('#add').text("订单详情");
        $.ajax({
            url:'php/client.php',
            type:'post',
            dataType:'json',
            // data:"&username="+User,
            success:function(data){
                var rowdata=data.clientname;
                var n = data.i;
                // alert(data.i);
                // alert(data.username);

                // $html.empty();
                $("#client-m ul").empty();
                $("<li></li>").html('<h3>客户名称</h3>').appendTo($("#client-m ul"));
                if (rowdata.length) {
                    // $html.empty();
                    $.each(rowdata,function(index,tem){
                        // var text=$('userN').val();
                        // alert(tem)
                        // $('#userN').attr(tem);

                        $("<li></li>").text(tem).appendTo($("#client-m ul")).click(function(){
                            $("#content .box-head .left").text('客户详情');
                            $("#content .box-head .right label").text('客户ID/客户名称');
                            var orderId=$(this).text();
                            $("li[class='selected']").removeClass('selected');
                            $(this).addClass("selected");
                            // alert(orderid);
                            $.ajax({
                                type:"POST",
                                url:"php/client1.php",
                                dataType:"json",
                                data:"clientname="+orderId,
                                success:function(data){
                                    // alert(data.client[0]);
                                    var str='';
                                    var cname=['客户编号','客户名称','简称','检索码','是否供应商','是否客户','类别类型' 
                                        ,'区域','首次合作时间','地址','邮编','法人','联系人','联系电话','Email','传真开户','银行账号','付款方式',
                                        '付款周期','结算货币','税号','营业执照','信用等级','信用额度','业务员','启用状态','创建时间','创建人','描述','备注']
                                    var client=data.client;
                                    $(".table table").empty();
                                    for (var i=0, len= client.length; i < len-1; i++) {
                                        if (client[i]==null) {client[i]='无';};
                                        str+='<td>'+cname[i]+':'+client[i]+'</td>';
                                        if ((i+1)%3==0) {
                                           $("<tr></tr>").html(str).appendTo($(".table table")) ;
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

});