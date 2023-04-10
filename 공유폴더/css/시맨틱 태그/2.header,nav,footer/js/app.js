var slideCurrent,slideWidth;

$(document).ready(function(){
    init();
    popup();
    tabs();
    menu(); // 탑 메뉴의 부드러운 서브메뉴 펼치는 기능
    movingSlide();
})
function menu(){
    var $gnb=$("#gnb > li");    
    // #gnb의 li 요소 (총 4개) 각각에 마우스 오버시 .lnb를 부드럽게 펼치기
    // 마우스 아웃되면 부드럽게 사라지기
    // $ : 찾아라
    // .method() : ~을 해라
    $gnb.hover(function(){ // 마우스 오버했을때 실행할 명령
        var $lnb=$(this).children('.lnb_wrap');
        $lnb.stop().slideDown('fast');
    },function(){ //마우스가 아웃되었을대 실행할 명령
        var $lnb=$(this).children('.lnb_wrap');
        $lnb.stop().slideUp('fast');
    });
}
function init() {
    $("#popup").hide();
    $(".lnb_wrap").hide();
    slideCurrent=0;
    slideWidth=1200;
}
function popup(){
    $(".notice_list").children("li").first().click(function(){
        $("#popup").fadeIn('fast');
    })
    $("#close_pop").click(function(){
        $("#popup").fadeOut();
    })
}
function tabs(){
    var TAB=$(".tab_btns ul li");
    TAB.first().addClass("on");
    var TABCON=$(".tab_contents div")  
    TABCON.eq(2).hide();
    TAB.hover(function(){
        var SELTAB=$(this);
        if(!SELTAB.hasClass("on")) {
            TAB.removeClass("on");
            $(this).addClass("on");
        }
        var TABIND=SELTAB.index();
        if(TABIND==0) {
            TABCON.eq(0).show();
            TABCON.eq(1).hide();
        } else {
            TABCON.eq(0).hide();
            TABCON.eq(1).show();
        }
    })
}

function movingSlide(){
    var intervalID=setInterval(slide,3000);
}
function slide(){
    var nIndex=slideCurrent+1;    
    if(nIndex>=3) nIndex=0;
    slideCurrent=nIndex;
    var newPos=-slideWidth*slideCurrent;
    $("#slides").animate({
        left:newPos
    },500);    
}