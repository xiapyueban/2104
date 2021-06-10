var li=document.querySelector(".product1")
        console.log(li)
        var title=document.querySelector(".tatle-x")
        li.onmouseover=function(){
            if(title.style.display=="block"){
                    title.style.display="none"
                }else{
                    title.style.display="block"
                }
        }
        li.onmouseout=function(){
            if(title.style.display=="block"){
                    title.style.display="none"
                }else{
                    title.style.display="block"
                }
        }