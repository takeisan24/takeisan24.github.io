
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
const ten = document.forms["form1"]["name"].value;
const sdt = document.forms["form1"]["tel"].value;
function validate(){
    if(ten == ""){
        alert("Vui lòng nhập họ tên đầy đủ!");
        document.forms["form1"]["name"].focus();
        return false;
    }
    if(sdt == ""){
        alert("Vui lòng nhập số điện thoại!");
        document.forms["form1"]["tel"].focus();
        return false;
    }
}
function PhoneNumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  if(inputtxt.value.match(phoneno))
     {
        alert('Valid phone number');
	    return true;
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}


