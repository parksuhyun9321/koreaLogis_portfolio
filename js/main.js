new fullpage ("#main",{
    onLeave:function(section,destination){
        // console.log(destination.index)
        let idx = destination.index;
        if(idx===0){
            section01.restart();
        }
    }
});

// fullpage 

$(window).on("resize",function(){
    let w = $(window).width() + 17;
    // console.log("w", w)
    if(w<=1200){
        if(!$("body").hasClass("mobile")){
            $("body").addClass("mobile");
        }   
    }  else {
        if( $("body").hasClass("mobile")){
            $("body").removeClass("mobile");
        }
        $("body").removeClass("open");
        $(".utilMenu").removeClass("open");
    }
});
$(window).trigger("resize");

// 웹화면의 사이즈에 변화가 있을때의 이벤트

$("#gnb .list > li").on("mouseenter",function(){
    if(!$("#gnb").hasClass("mobile")){
        $(".depth02",this).stop().slideDown(250);
    }
});
$("#gnb .list > li").on("mouseleave",function(){
    if(!$("#gnb").hasClass("mobile")){
        $(".depth02",this).stop().slideUp(250);
    }
});

// navigation 


$("#gnb .list > li .depth01").on("click",function(){
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    return false;
});

//  mobile-navigation 

$(".utilMenu").on("click",function(){
    $(this).toggleClass("open");
    $("body").toggleClass("open");
    return false;
});

// mobile-utill menu

$(".btnSearch").on("click",function(){
    if ($("body").addClass("overHidden")){
        $(".searchBar").fadeIn(250);
    } else {
        $(".searchBar").toggleClass("on");
    }
    return false;
});

$(".searchBar .btnClose").on("click",function(){
    $(".searchBar").fadeOut(250);
    $("body").removeClass("overHidden");
    return false;
});

// click 시 검색창 구현/닫기

// #header

let section01 = gsap.timeline();
section01.from("#section01 .txtBox .main",{
    duration:0.5,
    y:50,
    opacity:0,
    ease:"back.in"
});

// greensock 

// #section01
