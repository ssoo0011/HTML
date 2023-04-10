
$(document).ready(function(){

    mobile_open();
    
});

function mobile_open(){

    $(".open_btn").click(
        function(){
            alert("open_btn clicked!");
            $(".gnb").animate({ left : "-360px" },2000);
        }
    )

}
