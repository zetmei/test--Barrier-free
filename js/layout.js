//宣告window的東西不要放fonction裡面
var $win = $(window);

$(function(){
    //mobile menu
    $('.menu').click(
            function(){
              // alert("123");
            $('.mobile_navM').slideToggle(300);
            }  
    );

	//<a> dash blur
    $("a").focus(function(){
         $(this).blur();
     }); 
    $("button").focus(function(){
         $(this).blur();
     }); 

});