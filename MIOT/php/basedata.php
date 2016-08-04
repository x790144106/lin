<?php
header("Content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");  /*星号表示所有的域都可以接受，*/ 
header("Access-Control-Allow-Methods:GET,POST"); 

// $username = $_POST['username'];
// $password = $_POST['password'];
// if($username!=""){
//     $username=$username."%";
// }


$mysql_server_name="localhost"; //数据库服务器名称
$mysql_username="root"; // 连接数据库用户名
$mysql_password="123456"; // 连接数据库密码
$mysql_database="moit"; // 数据库的名字
    
$mysqli=new mysqli();
$mysqli->connect($mysql_server_name, $mysql_username,$mysql_password,$mysql_database);

$result=$mysqli->query("SELECT * FROM m_workshop");
$i=0;

while ($row=$result->fetch_assoc()) {
    $rows[$i]=$row[WSName];
    // print_r($row);
    $i++;
} 
$resulta=$mysqli->query("SELECT * FROM r_workgroup"); 
$n=0;

while ($rowa=$resulta->fetch_assoc()) {
    $rowsa[$n]=$rowa[GroupName];
    // print_r($row);
    $n++;
} 
$resultb=$mysqli->query("SELECT * FROM m_warehouse"); 
$h=0;

while ($rowb=$resultb->fetch_assoc()) {
    $rowsb[$h]=$rowb[WHName];
    // print_r($row);
    $h++;
} 
$resultc=$mysqli->query("SELECT * FROM sys_user"); 
$h=0;

while ($rowc=$resultc->fetch_assoc()) {
    $rowsc[$h]=$rowc[NAME];
    // print_r($row);
    $h++;
} 

$json_arr = array("wsname"=>$rows,"i"=>$i,"groupname"=>$rowsa,"whname"=>$rowsb,"name"=>$rowsc);
$json_obj = json_encode($json_arr);
echo $json_obj;
?>