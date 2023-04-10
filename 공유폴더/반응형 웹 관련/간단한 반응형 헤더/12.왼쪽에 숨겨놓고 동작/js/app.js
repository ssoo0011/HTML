
$(document).ready(function(){

    mobile_open();
    
});

function mobile_open(){

    $(".open_btn").click(
        function(){
            alert("open_btn clicked!");
            $(".gnb").animate({"left":"-500px"},500);
            /*토글로 hide,show 번걸아가면서 일어나게 */
        }
    )

}
