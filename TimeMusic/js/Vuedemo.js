var demo = new Vue({
    el:"#box-radius",
    data(){
        return{
            lens:$(".carousel-imgbox>li").length,
            url1: "#radius-box",
            url2: "#app",
            number:"未登录",
            
        }
    },
    created() {
        this.login();
    },
    methods:{
        login(){
            for (var i= 0;i<=window.sessionStorage.length;i++){
                if(window.sessionStorage.key(i)=="登录成功"){
                    this.number = window.sessionStorage.getItem("登录成功")
                    break
                }else{
                    this.number = "未登录";
                }
            }
        }
    }
})
var a = new Vue({
    el:".login",
    data(){
        return{
        msg:demo.number
        }
    },
    methods: {
        alogin(){

            if(this.msg=="未登录") {
                $(".login>span").css("display", "none")
                $(".to").css("display", "block")
                // $(".to").css("marginTop",-45+"px")
                $(".to").stop().animate({
                    "marginTop": -40 + "px"
                }, 1000),
                    $(".login>span").css("top", 60 + "px")
            }
            else{
                return
            }
        },

        alogint(){
            $(".to").css("display","none")
            $(".login>span").css("display","block")

            $(".login>span").stop().animate({
                "top":32+"px"
            },1000),
                $(".to").css("marginTop",0+"px")

        }
    }
});

// window.onhashchange =(function (){
//
// })
