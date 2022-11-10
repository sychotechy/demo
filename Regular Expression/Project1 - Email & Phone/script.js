const phoneRegex = new RegExp(/^[+]91 687[0-9]{7}$/g);
const emailRegex = new RegExp(/^\w+\W*@(yahoo.com|gmail.com)$/g);

const email = document.getElementById('email-box')
const phone = document.getElementById('phone-box')

const validate = function(){
    const emailValue = email.value;
    const phoneValue = phone.value;
    if(emailRegex.test(emailValue) && phoneRegex.test(phoneValue)){
        return true;
    }
    else{
        alert("Enter valid data")
        email.value = '';
        phone.value = '';
        return false;
    }
}