
$(document).ready(function(){

    mobile_open();
    mobile_close();
});

function mobile_open(){

    $(".open_btn").click(
        function(e){
            if( $(e.target).hasClass('open_btn')==true){
                alert("open_btn clicked!");
                $(".gnb").animate({"left":"-500px"},500);
                /*토글로 hide,show 번걸아가면서 일어나게 */
                $('body').css({'box-shadow':'10px 10px 9999px #888','z-index':999});
            }
            
        }
    )

}

function mobile_close(){
    $('html').click(function(e){
        if( $(e.target).hasClass('open_btn')===false){ 
            alert('바깥 클릭') 
            $(".gnb").animate({"left":"-900px"},500);
        } 
    });
}
