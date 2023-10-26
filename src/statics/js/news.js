// Tư vấn mua xe
function buyCarValidate(){
    let car = document.forms["buyCarForm"]["name"].value;
    if(car == ""){
        alert("Vui lòng nhập họ tên đầy đủ!");
        document.forms["buyCarForm"]["name"].focus();
        return false;
    }
    let car2 = document.forms["buyCarForm"]["phone"].value;
    if(car2 == ""){
        alert("Vui lòng nhập số điện thoại!");
        document.forms["buyCarForm"]["phone"].focus();
        return false;
    }
    let car3 = document.forms["buyCarForm"]["content"].value;
    if(car3 == ""){
        alert("Bạn chưa nhập nội dung!");
        document.forms["buyCarForm"]["content"].focus();
        return false;
    }
}
// Nhận tư vấn
function validate(){
    let ten = document.forms["form1"]["hoten"].value;
    if(ten == ""){
        alert("Vui lòng nhập họ tên đầy đủ!");
        document.forms["form1"]["hoten"].focus();
        return false;
    }
    let sdt = document.forms["form1"]["tel"].value;
    if(sdt = ""){
        alert("Vui lòng nhập số điện thoại!");
        document.forms["form1"]["tel"].focus();
        return false;
    }
}
function PhoneNumber(inputtxt)
{
    var phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if(inputtxt.value.match(phoneno)){
        alert('Số điện thoại hợp lệ!')
	    return true;
	}else{
        alert("Số điện thoại không hợp lệ!")
	    return false;
    }
}