//获取操作对象
var box=document.querySelector(".bigbox")

//获取地址栏中的参数信息
var search1=location.search
// var dt
//判断当前地址栏中是否有参数
if(search1){
     //分割字符串
    var ar1=search1.split("=")
     //判断当前参数是否为id
    if(ar1[0]=="?id"){
        //获取当前参数的值
        var id=ar1[1];
        (async function(){
            //发送请求，并获取响应结果
            dt=await promiseAjax({
                url:'./php/xiangqing.php',
                data:'id='+id
            })
            
            //把字符串转为对象
            dt=eval('('+dt+')')
            //把数据渲染到页面中
            var str=`
            <div class="bigbox1">
            <a href="./aiya.html">首页</a>
            <span>→</span>
            <a href="./list.html">所有产品</a>
            </div>                     
            <div class="content">
                <div class="content-r">
                    <img src="${dt.wu}" alt="">
                    <div class="mark"></div>
                </div>
                <div class="rightBox">
                    <img src="${dt.wu}">
                </div>
                <div class="content-l">
                    <h2>${dt.wenben}</h2>
                    <p class="cp2">${dt.ben}</p>
                    <p class="cp1">編號：6240</p>
                    <p class="cp1">適合膚質：任何膚質</p>
                    <p class="cp1">產地：美國</p>
                    <p class="cp1">容量：118ml</p>
                    <p class="cp1">積分：358</p>
                    <div class="js"><p>第一個評論該商品</p></div>
                    <p class="cp3">有庫存</p>
                    <p class="cp4">專櫃價 HK$400.00   會員價 <span class="cp5">${dt.jiage}</span></p>
                    <button type="button" class="btn2 btn-default">-</button>
                    <button type="button" class="btn2 btn-default">1</button>
                    <button type="button" class="btn2 btn-default">+</button>
                    
                    <div>
                        <button type="button" class="btn1 btn-xs btn btn-success"><a href="./car.html">立即购买</a></button>
                    </div>
                    <div>
                        <button type="button" class="btn1 btn-xs btn btn-info">加入购物车</button>
                    </div>
                </div>
            </div>
                <div class="xingq">
                    <div class="xingq-t">
                        <ul>
                            <li>详情</li>
                            <li>成份</li>
                            <li>使用方法</li>
                        </ul>
                    </div>
                    <div class="xingq-c"></div>
                    <div class="xingq-b">${dt.jieshao}</div>
                </div>    
            `
            box.innerHTML=str
            
var leftBox=document.querySelector(".content-r")
var mark=document.querySelector(".mark")
var rightBox=document.querySelector(".rightBox")
//给左边大盒子对象绑定事件
leftBox.onmouseover=function(){
    //显示隐藏的盒子
    mark.style.display='block'
    rightBox.style.display='block'
}

leftBox.onmouseout=function(){
    //隐藏指定盒子
    mark.style.display='none'
    rightBox.style.display='none'
}
leftBox.onmousemove=function(e){
    //兼容事件对象
    var e = e || window.event
    //获取移动距离
    var left1=e.clientX-leftBox.offsetLeft-parseInt(mark.offsetWidth/2)
    var top1=e.clientY-leftBox.offsetTop-parseInt(mark.offsetHeight/2) + 112.5
    
    // console.log(left1)
    //设置边界条件
    var maxX=leftBox.offsetWidth-mark.offsetWidth
    var maxY=leftBox.offsetHeight-mark.offsetHeight
    //右边图片移动的距离
    var imgLeft,imgTop
    //水平方向的判断
    if(left1<=0){
        mark.style.left="0px"
        imgLeft=0
    }else if(left1>=maxX){
        mark.style.left=maxX+'px'
        imgLeft=maxX
    }else{
        mark.style.left=left1+'px'
        imgLeft=left1
    }

    //垂直方向
    if(top1<=0){
        mark.style.top="0px"
        imgTop=0
    }else if(top1>=maxY){
        mark.style.top=maxY+'px'
        imgTop=maxY
    }else{
        mark.style.top=top1+'px'
        imgTop=top1
    }

    //获取右边盒子中的图片
    var img=rightBox.querySelector("img")
    //给右边图片设置偏移量
    img.style.left=-2*imgLeft+'px'
    img.style.top=-2*imgTop +'px'
}

        })()
    }else{
        alert("参数有误")
        location.href="./list.html"
    }
}else{
    alert("非法进入，请选择商品")
    location.href="./list.html"
}


//给大盒子对象绑定点击事件
box.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //事件目标的兼容
    var target=e.target || e.srcElement
    //判断当前点击的是否为加入购物车
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中cartList4
        var cartList4=localStorage.getItem("cartList4")||[]
        //判断当前cartList4是否存在
        if(cartList4.length>0){
            //把cartList4转为数组对象
            cartList4=eval('('+cartList4+')')
            var bool=true //是否有相同的商品
            //遍历数组
            cartList4.forEach(item=>{
                //判断当前遍历的商品是否跟添加的商品相同
                if(dt.id==item.id){
                    bool=false
                    //让当前的商品数量加1
                    item.cart_number++
                    //重新给localStorage设置键值对
                    localStorage.setItem("cartList4",JSON.stringify(cartList4))
                }
            })
            //判断bool是否为true
            if(bool){
                 //修改dt对象中的数量
                dt.cart_number=1
                //把当前商品追加到cartList4中
                cartList4.push(dt)
                //重新给localStorage设置键值对
                localStorage.setItem("cartList4",JSON.stringify(cartList4))
            }
        }else{
            //修改dt对象中的数量
            dt.cart_number=1
            //把当前商品追加到cartList4中
            cartList4.push(dt)
            console.log(dt)
            //重新给localStorage设置键值对
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
        }
    }
}
