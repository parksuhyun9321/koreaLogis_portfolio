new fullpage ("#main",{
    onLeave:function(section,destination){
        // console.log(destination.index)
        let idx = destination.index;
        if(idx===0){
            section01.restart();
        }
    }
})


let section01 = gsap.timeline();
section01.from("#section01 .txtBox .main",{
    duration:0.5,
    y:50,
    opacity:0,
    ease:"back.in"
});


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


$("#gnb .list > li .depth01").on("click",function(){
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    return false;
})


$(window).on("resize",function(){
    let w = $(window).width() + 17;
    // console.log("w", w)
    if(w<=1200){
        if( !$("#gnb").hasClass("mobile")){
        $("#gnb").addClass("mobile");
        }   
    }  else {
        if( $("#gnb").hasClass("mobile")){
            $("#gnb").removeClass("mobile");
        }
        $("body").removeClass("open");
        $(".utilMenu").removeClass("open");
    }
});
$(window).trigger("resize");




$(".utilMenu").on("click",function(){
    $(this).toggleClass("open");
    $("body").toggleClass("open");
    return false;
});
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
})