
$(document).ready(function(){
    //DOM이 완성되면 콜백실행
    popupCheck()//호출(사용)
    closeBtn()
    cookieCheck()
})

function cookieCheck(){
    if( $.cookie('popup_java') === 'ok'){
        //popup_java라는 이름의 쿠키의 값이 ok라면
        //쿠키가 존재하면?
        $("#popup").hide()
    }
}
function popupCheck(){//함수 선언,정의

    $("#popup-check").click(function(){
        alert("체크박스 클릭!")
        //쿠키 생성!
        $("#popup").hide()
        $.cookie('popup_java','ok',{
            expires:7,
            path:'/'
        })
        //이름이 popup_java 값이 ok이고
        //현재경로에 7일뒤에 만료되는 쿠키를 생성하겠다.

        //name,value,expires,path

        //name,value,domain,expires
    })
}
function closeBtn(){
    $("#close-btn").click(function(){
        alert("창닫기 버튼 클릭!")
        $("#popup").hide()
    })    
}