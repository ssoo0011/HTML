$(document).ready(function(){
    menu()
    slide()
    tab()
    popup()


})

function menu(){
    $(".gnb>li").hover(
        function(){ //mouseover
            $(".lnb").stop().slideDown()
        },
        function(){//mouseout
            $(".lnb").stop().slideUp()
        }
    )
}

function slide(){
    setInterval(slideMove,3000)
}
function slideMove(){
    $("#slide_contents").animate({"left" : "-=1200px"})
}

function tab(){

}
function popup(){

}
