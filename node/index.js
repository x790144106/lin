
$(function(){
    // alert("111111")
    $(".btn").click(function(){
        alert("error");
    $.ajax({
 // url:   "http://127.0.0.1:8888/",
 // url:   "http://10.8.208.170:8888/",
    // url:  "http://115.236.9.81:8888/"
    url:  "http://30d3f976.ngrok.natapp.cn/",
    type: "GET",
    // dataType: "string", //因为是调用nodeJS返回的json数据，所以必须使用binary类型
    error: function(XMLHttpRequest, textStatus, errorThrown){
    var s1=XMLHttpRequest;
    var s2=textStatus;
    var s3=errorThrown;
    alert("error message : "+errorThrown.toString())
    },
    success: function(data){
    // $("#feeds").html(data);
        var dataObj=eval('('+data+')');//转换为json对象
        // var dataObj= data.parseJSON();
      // var dataObj=data;
        $("#id").html("编号："+dataObj.id);
        $("#name").html("姓名："+dataObj.name);
        $("#arg").html("年龄："+dataObj.arg);
        $("span").html(dataObj.remark);
    
// //    alert( "Data is : " +  data );

//$.get("test.cgi", function(data){ alert("Data Loaded: " + data); }); //$.get函数形式结构

    
    } 

}); 
//     $.get("http://30d3f976.ngrok.natapp.cn/" + new Date().getTime(), function(data){ 
//         // $("#feeds").html(data);
//         var dataObj=eval('('+data+')');//转换为json对象
//         $("#id").html("编号："+dataObj.id);
//         $("#name").html("姓名："+dataObj.name);
//         $("#arg").html("年龄："+dataObj.arg);

//         $("span").html(dataObj.remark);

// //alert("Data Loaded: "+new Date().getTime()); 
//         });
});
});