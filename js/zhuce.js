//给按钮绑定点击事件
$('.btnn').click(function(){
    //获取输入框中的value值
    var u2=u1.value
    var p2=p1.value
    //通过ajax来发送请求
    $.ajax({
        url:'./php/zhuce.php',
        data:`username=${u2}&pwd=${p2}`,
        success:function(dt){
            //判断当前返回值是否为1
            console.log(dt);
            if(dt==1){
                //保存账号
                setCookie('name',u1)
                //判断当前search1是否有值
                    location.href="./logo.html"
                    
            }else{
                alert("登录失败")
        }
    }
})
})
