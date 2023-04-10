
$(document).ready(function(){
  menu()
  // tab()
  tab2()
  slider()
})

function slider(){
  $("#slide_contents").bxSlider({
    auto :true, //자동재생
    pager : false,
    pause : 2000,
    speed:300,
    autoControls:true, //자동재생 제어창
    mode:'horizontal',//가로
    //mode:'vertical'//세로
    // mode : fade 페이드인아웃

  });
}

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

function tab(){
  $(".tab_btn > a").eq(0).click(function(){
    $(".tab_contents>div").eq(1).hide()  
    $(".tab_contents>div").eq(0).show()
  })

  $(".tab_btn > a").eq(1).click(function(){
    $(".tab_contents>div").eq(1).show()  
    $(".tab_contents>div").eq(0).hide()
  })
}

function tab2(){
  $(".tab_btn > a").click(function(){
    var i = $(this).index() //클릭한 것의 인덱스 번호
    $(".tab_contents>div").hide()
    $(".tab_contents>div").eq(i).show()

  })
   
}
