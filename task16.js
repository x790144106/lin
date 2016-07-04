// JavaScript Document
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	//alert(111);
	var city = document.getElementById("aqi-city-input").value;
    var vv = document.getElementById("aqi-value-input").value;
	
	//alert(city);
	var cc = /^[\u4e00-\u9fa5]/;
	var ee = /^[A-Za-z]+$/;
	var num = vv;
	var zs = /^[-+]?\d+$/;
	//alert(zs.test(num));
	if((cc.test(city)||ee.test(city))&&zs.test(num)){
		//alert(11);
		aqiData[city]=num;
        document.getElementById("aqi-city-input").value="";
        document.getElementById("aqi-value-input").value="";
	}else{
		//alert(111);
		if(!(cc.test(city)||ee.test(city))&&zs.test(num)){
            alert("城市名必须为中英文字符");
            document.getElementById("aqi-city-input").value="";
        }
		if((cc.test(city)||ee.test(city))&&!zs.test(num)){
            alert("空气质量指数必须为整数字符");
            document.getElementById("aqi-value-input").value="";
        }	
		if(!(cc.test(city)||ee.test(city))&&!zs.test(num)){
            alert("城市名必须为中英文,空气质量指数必须为整数字符");
            document.getElementById("aqi-city-input").value="";
            document.getElementById("aqi-value-input").value="";
        }
	}
    
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tt=document.getElementById("aqi-table");
    //alert(aqiData);
    
        var arr=[];
        var str="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        for(var key in aqiData){
            str+="<tr><td>"+key+"</td><td>"+aqiData[key]+"</td><td><button>删除</button></td></tr>";
            arr.push(key);
        }
        if(arr.length!=0){
           tt.innerHTML=str; 
        }else{
            tt.innerHTML="";
        }
        var atable= document.getElementById("aqi-table");
        var btns=atable.getElementsByTagName("button");
        for (var i = 0,len=btns.length; i <len; i++) {
            btns[i].onclick=delBtnHandle;
        }
        
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	//alert(1);
  addAqiData();
  renderAqiList();


  }
/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  //var dd={};
  var text=this.parentNode.parentNode.innerHTML;
  var key=text.split("<td>")[1].split("</td>")[0];
  /*for(var kk in aqiData){
        //alert(aqiData[kk]);
        if(kk!=key){
            dd[kk]=aqiData[kk];
        }
  }8*/
  //aqiData=dd;
  //alert(dd[key]);
  //aqiData=dd;
  delete aqiData[key];
  renderAqiList();
}
//var ab= document.getElementById("aqi-city-input");
//alert(ab);
function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  	var ab= document.getElementById("add-btn");
    ab.onclick=addBtnHandle;
	
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    //var atable= document.getElementById("aqi-table");
    //var btns=atable.getElementsByTagName("button");
    //alert(atable);


}

init();

//var ab= document.getElementById("add-btn");
//a/b.attachEvent("onclick",alert(1111));