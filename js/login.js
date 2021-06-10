//获取操作对象
var checkbox1=document.querySelector('[type="checkbox"]')
var btn=document.querySelector('[type="button"]')
var user1=document.querySelector("#inputText3")
var pass1=document.querySelector("#inputPassword3")
//获取地址栏中的参数
var search1=location.search
//给选中框绑定点击事件
checkbox1.onclick=function(){
        //判断当前选择框是否被选中
    if(checkbox1.checked){
        //当选中框被选中时，取消按钮的禁用
        btn.disabled=false
    }else{
        btn.disabled=true
    }
}

//给按钮绑定点击事件
$('[type="button"]').click(function(){
    //获取输入框中的value值
    var u1=user1.value
    var p1=pass1.value
    //通过ajax来发送请求
    $.ajax({
        url:'./php/login.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
            //判断当前返回值是否为1
            if(dt==1){
                //保存账号
                setCookie('name',u1)
                //判断当前search1是否有值
                if(search1){
                    //分割参数
                    var url1=search1.split('=')[1]
                    //跳转到指定的地址中
                    location.href=url1
                }else{
                     //跳转到列表页
                    location.href="./list.html"
                }              
            }else{
                alert("登录失败")
            }
        }
    })
})