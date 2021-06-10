var frm=document.querySelector("form")
        var u1=document.querySelector('[name="username"]')
        var p1=document.querySelector('[name="pwd"]')
        var p2=document.querySelector('[name="pwd1"]')
        var e1=document.querySelector('[name="email"]')
        var d1=document.querySelector('[name="phone"]')
        var spans=document.querySelectorAll('.span1')
        //账号是否验证通过
        var user1=false 
        var pass1=false
        var pass2=false
        var email1=false
        var phone1=false
         //给user对象添加失去焦点事件
         u1.onblur=function(){
            //获取输入框中的内容
            var val=this.value
            var reg=/[\u4e00-\u9fa5]+/g
            //判断当前输入框中的字符串是否符合正则表达式
            if(reg.test(val)){
                spans[0].innerHTML="√"
                user1=true
            }else{
                spans[0].innerHTML="账号输入有误"
                //让当前输入框重新获取焦点
                this.focus()
                user1=false
            }
        }
        p1.onblur=function(){
            var val=this.value
            var reg=/^\w{6,16}$/
            if(reg.test(val)){
                // spans[3].innerHTML="√"
                var a=0 //数字
                var b=0 //小写字母
                var c=0 //大写字母
                var d=0 //下划线
                //遍历字符串中每个字符
                for(var i=0;i<val.length;i++){
                    //判断当前遍历出来的字符
                    if("0"<=val[i] && val[i]<="9"){
                        a=1
                    }else if("a"<=val[i] && val[i]<="z"){
                        b=1
                    }else if("A"<=val[i] && val[i]<="Z"){
                        c=1
                    }else{
                        d=1
                    }
                }
                //判断出现了多少种字符
                if(a+b+c+d==1){
                    spans[3].innerHTML="密码强度太弱了"
                }else if(a+b+c+d==2){
                    spans[3].innerHTML="密码安全性一般"
                }else if(a+b+c+d>2){
                    spans[3].innerHTML="非常强"
                }
                pass1=true
            }else{
                spans[3].innerHTML="密码格式不对"
                this.focus()
                pass1=false
            }
        }
        //确认密码
        p2.onblur=function(){
            var val=this.value
            //获取密码的value值
            var val2=p1.value
            var reg=/^\w{6,16}$/
            if(val===val2 && reg.test(val2)){
                spans[4].innerHTML="√"
                pass2=true
            }else{
                spans[4].innerHTML="两次密码不一致"
                pass2=false
                this.focus()
            }
        }
        //邮箱验证
        e1.onblur=function(){
            var val=this.value
            var reg=/^\w{6,}@(163|126|qq|sina)\.(com|cn|net)$/
            if(reg.test(val)){
                spans[2].innerHTML="√"
                email1=true
            }else{
                spans[2].innerHTML="邮箱格式有误"
                email1=false
                this.focus()
            }
        }
        //手机验证
        d1.onblur=function(){
            var val=this.value
            var reg=/^(1|\+861)[3-8]{1}\d{9}$/
            if(reg.test(val)){
                spans[1].innerHTML="√"
                phone1=true
            }else{
                spans[1].innerHTML="手机账号有误"
                email1=false
                this.focus()
            }
        }
        //给form表单添加表单提交事件
        frm.onsubmit=function(){
            //判断表单元素是否验证通过
            if(user1 && pass1 && pass2 && email1 && phone1){
                return false
            }else{
                u1.onblur()
                p1.onblur()
                p2.onblur()
                e1.onblur()
                d1.onblur()
                return 
            }
        }