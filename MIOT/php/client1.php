<?php
header("Content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");  /*星号表示所有的域都可以接受，*/ 
header("Access-Control-Allow-Methods:GET,POST"); 

$orderid = $_POST['orderid'];
$clientname = $_POST['clientname'];
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
// $q="SELECT * FROM m_orderlist where OrderId="."'".$orderid."'".";";
// $q.="SELECT * FROM m_orderlist where OrderId="."'".$orderid."'";
// if ($mysqli->multi_query($q)) {
    
//     if ($result=mysqli->store_result()) {
//         $row=$result->fetch_row();
//         $rows=$row;
//     }
//     if ($mysqli->next_result()) {
//         if ($result=mysqli->store_result()) {
//             $row1=$result->fetch_row();
//             $rows1=$row1;
//         }
//     }
    
// }
$result=$mysqli->query("SELECT * FROM m_order where OrderId="."'".$orderid."'");

// 
$row=$result->fetch_row();
$rows=$row;

$resultb=$mysqli->query("SELECT * FROM m_customer where ABCName="."'".$clientname."'");

// 
$rowb=$resultb->fetch_row();
$rowsb=$rowb;
// print_r($row);
// $result->close();
$resulta=$mysqli->query("SELECT OrderListId,OrderId,MaterialEncode,OrderNum,DeliveryDate FROM m_orderlist where OrderId="."'".$orderid."'");
// $rows1=1;
// $rowa=$resulta->fetch_row();
// $rowsa=$rowa[0

$i=0;
while ($rowa=$resulta->fetch_row()) {
    $rowsa[$i][0]=$rowa[0];
    $rowsa[$i][1]=$rowa[1];
    $rowsa[$i][2]=$rowa[2];
    $rowsa[$i][3]=$rowa[3];
    $rowsa[$i][4]=$rowa[4];
    // print_r($row);
    $i++;
}   
// $code=101;
// print_r($code);
$json_arr = array("order"=>$rows,"orderlist"=>$rowsa,"code"=>$i,"client"=>$rowsb,"cname"=>$clientname);
$json_obj = json_encode($json_arr);
echo $json_obj;
?>