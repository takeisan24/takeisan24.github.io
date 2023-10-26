// Gửi liên hệ
function sendContactValidate(){
    let name = document.forms["sendContact"]["yname"].value
    if(name == ""){
        alert("Vui lòng nhập họ tên đầy đủ!");
        document.forms["sendContact"]["yname"].focus();
        return false;
    }
    let mail = document.forms["sendContact"]["email"].value
    if(mail == ""){
        alert("Vui lòng nhập email!");
        document.forms["sendContact"]["email"].focus();
        return false;
    }
    let  title = document.forms["sendContact"]["title"].value
    if(title == ""){
        alert("Vui lòng nhập tiêu đề!");
        document.forms["sendContact"]["title"].focus();
        return false;
    }
    let content = document.forms["sendContact"]["content"].value
    if(content == ""){
        alert("Vui lòng nhập nội dung!");
        document.forms["sendContact"]["content"].focus();
        return false;
    }
}
function validateMail(input){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.value.match(validRegex)){
        alert("Địa chỉ email hợp lệ!");
        document.forms["sendContact"]["email"].focus();
        setTimeout(alert("Gửi thành công!"), 10000);
        return true;
    }else{
        alert("Địa chỉ email không hợp lệ!");
        document.forms["sendContact"]["email"].focus();
        setTimeout(alert("Gửi thất bại!"), 10000);
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