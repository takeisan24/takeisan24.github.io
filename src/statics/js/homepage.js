
/* Sideshow */
w3.slideshow(".nature", 1500)

/* Bảng giá xe */
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#tab_duoi--500tr").slideDown("slow");
        $("#tab_500--800tr").fadeOut();
        $("#tab_duoi--1ty").fadeOut();
        $("#tab_1--2ty").fadeOut();
    })
    $("#btn2").click(function(){
        $("#tab_duoi--500tr").fadeOut();
        $("#tab_500--800tr").fadeIn("slow");
        $("#tab_duoi--1ty").fadeOut();
        $("#tab_1--2ty").fadeOut();
    })
    $("#btn3").click(function(){
        $("#tab_duoi--500tr").fadeOut();
        $("#tab_500--800tr").fadeOut();
        $("#tab_duoi--1ty").slideDown("slow");
        $("#tab_1--2ty").fadeOut();
    })
    $("#btn4").click(function(){
        $("#tab_duoi--500tr").fadeOut();
        $("#tab_500--800tr").fadeOut();
        $("#tab_duoi--1ty").fadeOut();
        $("#tab_1--2ty").fadeIn("slow");
    })
})
/* Nhận tư vấn */


