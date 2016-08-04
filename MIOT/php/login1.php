<?php
header("Content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");  /*星号表示所有的域都可以接受，*/ 
header("Access-Control-Allow-Methods:GET,POST"); 

$username = $_POST['username'];
// $password = $_POST['password'];
if($username!=""){
    $username="%".$username."%";
}
// $username='a'
// $age = $_POST['age'];
// $job = $_POST['job'];

$mysql_server_name="115.236.9.86"; //数据库服务器名称
$mysql_username="root"; // 连接数据库用户名
$mysql_password="123456"; // 连接数据库密码
$mysql_database="moit"; // 数据库的名字
	
// 	 // 连接到数据库
// $conn=mysql_connect($mysql_server_name, $mysql_username,$mysql_password);
// if(mysqli_connect_errno){
// 	printf("no connect");
// }
// 	// 从表中提取信息的sql语句
// $strsql="SELECT CODE FROM sys_user where ID=1 ";
//     // 执行sql查询
// $result=mysql_db_query($mysql_database, $strsql, $conn);
//     // 获取查询结果
// $row=mysql_fetch_row($result);
// $username='a%';
// echo $username;
$mysqli=new mysqli();
$mysqli->connect($mysql_server_name, $mysql_username,$mysql_password,$mysql_database);
// echo "122".$mysqli->get_server_info();
$result=$mysqli->query("SELECT NAME FROM sys_user where NAME like"."'".$username."'");

// echo "122".$mysqli->get_server_info();
// echo "row"=>$row;
// $row=$result->fetch_assoc();
$i=0;
while ($row=$result->fetch_assoc()) {
    $rows[$i]=$row[NAME];
    // print_r($row);
    $i++;
}
// $result1=$mysqli->query("SELECT NAME,PASSWORD FROM sys_user where NAME ="."'".$username."'");

// $code=1;   
// if ($row1=$result1->fetch_assoc())) {
//     if ($password!=row1[PASSWORD]) {
//         $code=101; 
//     }
// }else{
//     $code=101; 
// }
// printf($rows);
// $row=$result->fetch_assoc();
// print_r($row);
// $row=$result->fetch_assoc();
// print_r($row);
// $row=$result->fetch_assoc();
// print_r($row);
// $row=$result->fetch_assoc();
// print_r($row);



// echo "122".$mysqli->get_server_info();
// echo "row"=>$row;
// while(list($CN,$cid,$CNA)=$result->fetch_row()){
//     echo $CN.",".$cid.",".$CNA."<br>"
// }

// $username = $_POST['username'];
// $age = $_POST['age'];
// $job = $_POST['job'];
$json_arr = array("username"=>$username,"row"=>$rows);
$json_obj = json_encode($json_arr);
echo $json_obj;
?>