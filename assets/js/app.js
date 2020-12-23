$(document).ready(function(){
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
        if (scroll >=200) {
             $(".menu-wrapper").addClass("menu-wrapper2");
         } else {
             $(".menu-wrapper").removeClass("menu-wrapper2");
         }  
    });
})