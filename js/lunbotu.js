
        var logo=document.querySelector(".logo")
        var logo1=document.querySelector(".logo-1")
        var logo2=document.querySelector(".logo-2")
        var leftBtn=document.querySelector(".left")
        var rightBtn=document.querySelector(".right")
        var imgs=document.getElementById("logo-img").querySelectorAll("img")
        var lis=document.getElementById("logo-li").querySelectorAll("li")

        
        

        //创建定时器名称
        var dsq1,dsq2
        //获取图片宽度
        var imgW=imgs[0].offsetWidth
        console.log(imgW)
        //获取当前显示图片的下标
        var imgIndex=1
        //设置按钮下标
        var btnIndex=0
        //打开页面时直接显示第二张图片
        logo1.scrollLeft=imgIndex*imgW

        //让图片进行切换
        function moveMent(){
            //改变图片下标
            imgIndex++
            //当图片是最后一张时，需要跳转到图片2时，那么需要把滚动距离设置到图片1上
            if(imgIndex>4){
                imgIndex=2
                //给logo-1设置上一张图片的滚动距离
                logo1.scrollLeft=(imgIndex-1)*imgW
            }
            move()
        
            //先去除li对象中class属性值
            for(var i=0;i<lis.length;i++){
                lis[i].className=''
            }
            btnIndex++
            if(btnIndex>2){
                btnIndex=0
            }
            //给指定的li对象添加class属性值
            lis[btnIndex].className='bg'
        }
        
        //给logo设置鼠标移入移出事件
        logo.onmouseover=function(){
            clearInterval(dsq1)
        }
        logo.onmouseout=function(){
            dsq1=setInterval(moveMent,3000)
        }

        //给右边按钮设置点击事件
        rightBtn.onclick=function(){
            moveMent()
        }
        //给左边按钮设置点击事件
        leftBtn.onclick=function(){
            //改变图片下标
            imgIndex--
            if(imgIndex<0){
                imgIndex=2
                //给logo1设置上一张图片的滚动距离
               logo1.scrollLeft=(imgIndex+1)*imgW
            }
            move()
        
            //先去除li对象中class属性值
            for(var i=0;i<lis.length;i++){
                lis[i].className=''
            }
            btnIndex--
            if(btnIndex<0){
                btnIndex=2
            }
            //给指定的li对象添加class属性值
            lis[btnIndex].className='bg'
        }
        //遍历每个li对象
        for(let i=0;i<lis.length;i++){
            //给每个li对象绑定点击事件
            lis[i].onclick=function(){
                //把当前li的下标赋值给btnIndex
                btnIndex=i
                // 给imgIndex设置下标
                imgIndex=i+1
                move()
                //把所有li对象中class属性值清空
                for(let j=0;j<lis.length;j++){
                    lis[j].className=''
                }
                //给指定的li对象添加class属性值
                lis[btnIndex].className='bg'
            }
        }
        //创建定时器
        dsq1=setInterval(moveMent,3000)

        //运动函数
        function move(){
            //获取起始值和结束值
            var start=logo1.scrollLeft
            var end=imgIndex*imgW
            //计算每一步移动的距离
            var speed=(end-start)/20
            var num=0//统计移动步数
            //清除定时器
            clearInterval(dsq2)
            dsq2=setInterval(function(){
                num++
                //判断当前移动步数是否等于20
                if(num==20){
                    clearInterval(dsq2)
                    logo1.scrollLeft=end
                }else{
                    start+=speed
                    logo1.scrollLeft=start
                }
            },70)
        }
