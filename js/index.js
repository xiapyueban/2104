
//获取操作对象
var inp=document.querySelector('input')
var ul=document.querySelector("ul")

//给输入框绑定oninput事件
inp.oninput=function(){
    //获取输入框中的内容
    var val=this.value
    //判断当前输入框中是否有值
    if(val.length>0){
         //创建script标签
         var script=document.createElement("script")
         //给当前标签添加src属性值
         script.src=`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${val}&req=2&csor=2&pwd=a&cb=fn1&_=1621648073486` 
         //把当前script标签追加到body中
         document.body.appendChild(script)
         //删除最后一个script
         document.body.lastElementChild.remove()
    }else{
      ul.style.display="none"
    }
}
//创建全局的fn1函数
function fn1(dt){
    //获取所需的内容
    var arr=dt.g
    //判断当前获取的数组中是否有值
    if(arr.length>0){
      //显示ul对象
      ul.style.display="block"
      //定义字符串，拼接所有内容
      var str=''
      //遍历数组中每个元素
      arr.forEach(item=>{
         str+=`
             <li>${item.q}</li>
         `
      })
      //把拼接好的内容渲染到ul中
      ul.innerHTML=str
    }else{
       ul.style.display="none"
    }
}