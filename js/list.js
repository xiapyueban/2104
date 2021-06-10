
//获取操作对象
var row=document.querySelector(".row")
var pagination=document.querySelector(".pagination");

//通过自执行函数来获取数据
(async function(){
    var arr=await promiseAjax({
        url:'./php/list.php'
    })
    // console.log(arr)
    //把字符串转为对象
    arr=eval('('+arr+')')
    //配置传入的对象信息
    var o1={
        pageInfo:{
            pagenum:1,
            pagesize:12,
            totalsize:arr.length,
            totalpage:Math.ceil(arr.length/12)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        }
    }
    //实例化分页器对象
    new Pagination(pagination,o1,(m)=>{
        // console.log(m)
        //通过页码，来进行分页数据显示
        var arr2=arr.slice((m-1)*12,m*12)
        // console.log(arr2)
        //创建字符串，拼接所有内容
        var str=''
        // //遍历数组中所有数据
        arr2.forEach(item=>{
            str+=`
                <div class="col-lg-3 col-md-5">
                <div class="thumbnail">
                    <!-- <ol class="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Library</a></li>
                        <li class="active">Data</li>
                    </ol> -->
                    <img src="${item.tupian}" alt="...">
                    <div class="caption">
                    <h3 class="title1">${item.title}</h3>
                    <p> <span class="caption-p">${item.price}</span><span class="caption-s">${item.priec1}</span></p>
                    <p><a href="./car.html" class="btn btn-primary" role="button">进入购物车</a> <a href="./xingqing.html?id=${item.id}" class="btn btn-default" role="button">查看商品详情</a></p>
                    </div>
                </div>
                </div>
            `
        })
        //把拼接好的内容渲染到页面中
        row.innerHTML=str
    })
})()
