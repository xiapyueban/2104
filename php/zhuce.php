<?php
include "./datas.php";
//获取传入的参数
$n=$_GET['username'];
$c=$_GET['pwd'];

//编写SQL语句
$sql="insert into user(name,pass)values('$n','$c')";
//执行SQL语句
$result=mysqli_query($link,$sql);
//判断当前数据是否添加成功
if($result){
    // header("location:../logo.html");
    echo  1;
}else{
    // echo "<script>location.href='../zhuce.html'</script>";
    echo 0;
}
//关闭数据库
mysqli_close($link);

?>
