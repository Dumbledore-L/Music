$(".login-go").click(function (){
    var offset = $(".login-box").offsetLeft
    if(offset==0) {
        $(".input-box").css("display","none")
    }
    $(".login-box").stop().animate({
        "marginLeft":-500+"px"
    },1000,function (){
        $(".input-box").css("display","")
    })
})
$(".register-go").click(function (){
    var offset = $(".login-box").offsetLeft
    if(offset>0) {
        $(".input-box").css("display","none")
    }
    $(".login-box").stop().animate({
        "marginLeft":0+"px"
    },1000,function (){
        $(".input-box").css("display","")
    })
})

$(".post").click(function (){
    var number = $(".input-box>input").eq(0).val(),
        password = $(".input-box>input").eq(1).val(),
        password2 = $(".input-box>input").eq(2).val();
    console.log(number.length)
    var data = [
        {"num":number},
        {"password":password}
    ]
    var loca = window.localStorage,
        flage = false;
    for (var i = 0; i <= loca.length; i++) {
        var num = number.toString();
        var key = loca.key(i);
        if (num == key) {
            flage = true;
        }
    }
    if(number==""||password==""){
        alert("账号或密码为空")
    }else if(password!=password2){
        alert("密码不一致请重新输入")
        $(".input-box>input:eq(0)").val(""),$(".input-box>input:eq(1)").val(""),$(".input-box>input:eq(2)").val("")
    }else if(number.length<8||password.length<8||number.length>20||password.length>20){
        alert("请把账号和密码的长度控制在8-20位之间")
    }else if(number == password){
        alert("账号与密码不能一致，请重新输入")
    }else if(/.*[\u4e00-\u9fa5]+.*$/.test(number)){
        alert("账号中不能存在中文字符，请重新输入")
    } else if(flage){
        alert("账号已存在")
    }else {
        $(".input-box>input:eq(0)").val(""), $(".input-box>input:eq(1)").val(""), $(".input-box>input:eq(2)").val("")
        alert("注册成功");
        localStorage.setItem(number, password);
        $(".login-box").stop().animate({
            "marginLeft": -500 + "px"
        }, 1500)
    }
})
var numb = new Vue({
    el:".num",
    data(){
        return{
        msg:""
        }
    }
});

var go = false,
    msga = "";
$(".get").click(function (){
    console.log(numb.msg)
    var num = $(".num").val().toString(),
        password = $(".password").val().toString();
    var loca = window.localStorage;
    for(var i=0;i<loca.length;i++){
        var key = loca.key(i),
            value = loca.getItem(key);
        if(key == num&&password==value){
            go  = true;
        }
    }
    if(go){
        console.log(num.msg)
        window.sessionStorage.setItem("登录成功",numb.msg)
        $(".num").val("")
        window.location.href='./index.html';
        alert("登录成功")
    }else{
        alert("账号或密码错误")
    }
})
