
$(document).ready(function(){

    mobile_open();
    
});

function mobile_open(){

    $(".open_btn").click(
        function(){
            alert("open_btn clicked!");
            $(".gnb").toggle();
            /*토글로 hide,show 번걸아가면서 일어나게 */
        }
    )

}
