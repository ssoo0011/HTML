
$(document).ready(function(){
  menu()
  slide()
  // tab()
  tab2()
  popup()
})

function menu(){
  $(".gnb>li").hover(
    function(){//mouseover
      $(".lnb").stop().slideDown()
    },
    function(){//mouseout
      $(".lnb").stop().slideUp()
    }
  )
}

function slide(){
  setInterval(slideMove,1000)
}

var idx = 0; //슬라이드 인덱스
var curLeft = 0;//현제 left위치
function slideMove(){

  idx++;
  curLeft = -1200 * idx;
  if(curLeft == -3600){
    curLeft = 0;
    idx = 0;
  }

  $("#slide-contents").animate({"left":curLeft})
}

function popup(){ 
  $(".pop").click(function(){
    $('#popup').show()

  })
  $("#closeBtn").click(function(){
    $('#popup').hide()
    
  })
}
