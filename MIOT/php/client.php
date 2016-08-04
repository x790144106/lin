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
// echo "122".$mysqli->get_server_info();
// $result=$mysqli->query("SELECT NAME FROM sys_user where NAME like"."'".$username."'");

// echo "122".$mysqli->get_server_info();
// echo "row"=>$row;
// $row=$result->fetch_assoc();
// $i=0;
// while ($row=$result->fetch_assoc()) {
//     $rows[$i]=$row[NAME];
//     // print_r($row);
//     $i++;
// }
$result=$mysqli->query("SELECT * FROM m_order");
$i=0;
// $row=$result->fetch_assoc();
// print_r($row);
while ($row=$result->fetch_assoc()) {
    $rows[$i]=$row[OrderId];
    // print_r($row);
    $i++;
} 
$resulta=$mysqli->query("SELECT * FROM m_customer"); 
$n=0;
// $row=$result->fetch_assoc();
// print_r($row);
while ($rowa=$resulta->fetch_assoc()) {
    $rowsa[$n]=$rowa[ABCName];
    // print_r($row);
    $n++;
}  
// $code=101;
// print_r($code);
$json_arr = array("orderid"=>$rows,"i"=>$i,"clientname"=>$rowsa);
$json_obj = json_encode($json_arr);
echo $json_obj;
?>