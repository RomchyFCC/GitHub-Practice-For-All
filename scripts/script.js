$(document).ready(function(){
    //on click show submenu
    $(".top-navbar").on("click",".projects",function(){
        $(".subMenu").toggle();
        $("main").toggleClass("opacity");
    })

});