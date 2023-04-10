
$(document).ready(function(){

    mobile_open();
    
});
var gnb_state=false
function mobile_open(){

    $(".open_btn").click(
        function(){
            if(gnb_state==true){
                alert("clsoe!!");
                $(".gnb").animate({ left : "100px" },500);
                gnb_state=false
            }else{
                alert("open!!");
                $(".gnb").animate({ left : "-400px" },500);
                gnb_state=true
            }
            
        }
    )

}
