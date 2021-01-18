var box = document.getElementsByClassName("carousel-imgbox")[0],
    img = box.querySelectorAll("li"),
    clone = box.firstElementChild.cloneNode(true),
    clone2 = box.lastElementChild.cloneNode(true);
box.appendChild(clone);
box.insertBefore(clone2,img[0]);
var tops = document.getElementsByClassName("top")[0];

/*一直监控浏览器进度条*/
window.onscroll=function (){

    var scroll = document.documentElement.scrollTop;
    if(scroll>30){
        $(".login").css("display","none")
    }
    if (scroll>300){
        tops.style.opacity = 1;
        console.log(1)

    }
    if(scroll<=50){
        tops.style.opacity = 0;
        $(".login").css("display","block")
    }
}
// //点击回到原点
tops.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    tops.style.opacity = 1;
}
var count = 1,
    flage = true,
    imglen = $(".carousel-imgbox>li").length;
$(".left-btn").click(function () {
    if (flage) {
        flage = false;
        j++;
        count--;
        $(".carousel-imgbox").animate({
            "marginLeft": count * -1150 + "px"
        }, 1500, function () {
            flage = true;
            if (count <= 0) {
                $(".carousel-imgbox").css("marginLeft", (imglen - 2) * -1150 + "px")
                count = imglen - 2;
            }
        })
    }
})
var radius = $(".btn-radius");
// console.log(radius.length)
var i =3,
    j = 3;
function a() {
    for (var j = 0; j <= 3; j++) {
        radius[j].index = i+1;
        i--;
        radius[j].onmouseenter = function () {
            clearInterval(time)
            this.style.backgroundColor = "white";
            $(".carousel-imgbox").css("marginLeft",this.index*-1150+"px")
        }
        radius[j].onmouseleave = function () {
            time = setInterval(right,2000)
            this.style.backgroundColor = "";
            count = this.index;
        }
    }

}
a();

// console.log(i)
function right() {
    if (flage) {
        flage = false;
        if(j<=0){
            j=4;
        }
        j--;
        radius[j].style.backgroundColor = 'white';
        count++;
        $(".carousel-imgbox").animate({
            "marginLeft": count * -1150 + "px"
        }, 1500, function () {
            radius[j].style.backgroundColor='';
            flage = true;
            if (count >= 5 ) {
                $(".carousel-imgbox").css("marginLeft", -1150 + "px")
                count = 1;
            }
        });
    }
}
$(".right-btn").click(function () {
    right();
})
var time = setInterval(right,2000)
$(".btn-box").mouseenter(function (){
    clearInterval(time);
}).mouseleave(function (){
    time = setInterval(right,2000)
})

//实现跳转检测
var islogin = false;
for (var i= 0;i<=window.sessionStorage.length;i++){
    if(window.sessionStorage.key(i)=="登录成功"){
        islogin = true
    }
}

$(".btn1").click(function(){
    console.log($(".hint"))

    $(".hint").css("display","none");
})
console.log(islogin) 
window.onhashchange = function(){
   
   if(!islogin){

       $(".hint").css("display","block")
   }else{
       window.location.href = "./datapage.html" 
   }

}


